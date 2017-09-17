import {ACTION} from './action'


export interface IAppState {
    counter?:number

}

export function rootReducer<IAppState>(state, action) {
    switch(action.type){
        case ACTION.INCREMENT:
        return {counter:state.counter+1}

    }
    return state;
}