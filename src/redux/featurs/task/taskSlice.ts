import type { RootState } from "@/redux/store";
import type { ITask } from "@/type";
import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {
    tasks: ITask[]
}

const initialState: IinitialState = {
    tasks: [
        {
            id: "äjkhdfkjadhsfak",
            title: "Initialise Frontd End",
            description: "This is a task to initialise Frontend",
            isCompleted: false,
            dueDate: "2025-11",
            priority: "High",
        },
        {
            id: "kasdhjfkjadsh",
            title: "Create GIT HUB Repo",
            description: "This is a task to create a GIT HUB Repo",
            isCompleted: false,
            dueDate: "2025-08",
            priority: "Medium",
        },
    ]
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {}
})


export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
}

export default taskSlice.reducer;