import { createSlice, configureStore } from '@reduxjs/toolkit'

const todoKey = "todoList"

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        data: []
    },
    reducers: {
        initStore: state => {
            state.data = JSON.parse(localStorage.getItem(todoKey))
        },
        addList: (state, { payload }) => {
            state.data = [ ...state.data, payload ]
        }
    }
})

export const { initStore, addList } = counterSlice.actions

const store = configureStore({
    reducer: counterSlice.reducer
})

// 初始化仓库
store.dispatch(initStore());

export default store;

// 可以订阅 store
store.subscribe(() => console.log(store.getState()))

// 将我们所创建的 action 对象传递给 `dispatch`
// console.log(incremented('ddd', 'vvv'))
// store.dispatch(incremented('a', 'c'))