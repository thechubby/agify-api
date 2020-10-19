import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators, Dispatch} from "redux";
import { changeInput } from "./store/actions";

export const ACTION_CHANGE_INPUT = 'ACTION_CHANGE_INPUT';

interface StateInterface {
    result: string
}

interface PropsInterface {
    input: string,
    changeInput: (newInput: string) => {}
}

export class Agify extends React.Component<PropsInterface, StateInterface> {

    constructor(props: PropsInterface) {
        super(props);
        this.state = { result: '' };
        this.onBtnClick = this.onBtnClick.bind(this);
    }

    async onBtnClick() :Promise<void> {

        const response = await fetch(`https://api.agify.io?name=${this.props.input}`);
        const data = await response.json();
        this.setState({result: data.age});
    }

    render(): React.ReactNode {

        let { input, changeInput } = this.props;
        return (
            <div>
                <p>Заполните имя (например michael) и нажмите на кнопку чтобы узнать предполагаемый возраст имени</p>
                <input
                    type="text"
                    value={input}
                    onChange=
                        {
                            (event) =>
                            {
                                changeInput(event.target.value)
                            }
                        }
                />
                <button onClick={this.onBtnClick}>Нажми на меня</button>
                <p>Предполагаемый возраст по имени: {this.state.result}</p>
            </div>
        );
    }
}

const putStateToProps = (state: PropsInterface) :object => {
    return {
        input: state.input
    };
};

const putActionsToProps = (dispatch: Dispatch<any>) :object => {
    return {
        changeInput: bindActionCreators(changeInput, dispatch)
    }
}

export default connect(putStateToProps, putActionsToProps)(Agify);