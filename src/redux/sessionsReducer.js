import {createAction, createReducer} from "redux-act";

export const addSlot = createAction("Add slot");

const initialState = [
    {
        avatar: "https://i2.wp.com/itakeunconf.com/wp-content/uploads/2015/10/michael-feathers1.jpg?resize=270%2C270&ssl=1",
        name: "Michael Feathers",
        talk: "Error Elimination as a Design Driver",
    },
    {
        avatar: "https://i1.wp.com/itakeunconf.com/wp-content/uploads/2016/02/Alastair_Smith_original-e1518689904631.jpg?resize=250%2C250&ssl=1",
        name: "Alastair Smith",
        talk: "Check That: How a List Can Save Your Life",
    },
];

const sessionsReducer = createReducer({
    [addSlot]: (state, slot) => {
        return [...state, slot]
    },
}, initialState);

export default sessionsReducer;