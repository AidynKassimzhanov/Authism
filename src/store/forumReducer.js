import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    forums : [
        {
            id: 1,
            title: 'Communication article',
            description: 'этих проблем настолько очевидна, что сложившаяся структура организации требует определения и уточнения модели развития.  Этих проблем настолько очевидна, что сложившаяся структура организации требует определения и уточнения модели развития.',
            create: '09.12.2023'
        },
        {
            id: 2,
            title: 'Communication article',
            description: 'этих проблем настолько очевидна, что сложившаяся структура организации требует определения и уточнения модели развития.  Этих проблем настолько очевидна, что сложившаяся структура организации требует определения и уточнения модели развития.',
            create: '09.12.2023'
        },
        {
            id: 3,
            title: 'Communication article',
            description: 'этих проблем настолько очевидна, что сложившаяся структура организации требует определения и уточнения модели развития.  Этих проблем настолько очевидна, что сложившаяся структура организации требует определения и уточнения модели развития.',
            create: '09.12.2023'
        },
        {
            id: 4,
            title: 'Communication article',
            description: 'этих проблем настолько очевидна, что сложившаяся структура организации требует определения и уточнения модели развития.  Этих проблем настолько очевидна, что сложившаяся структура организации требует определения и уточнения модели развития.',
            create: '09.12.2023'
        },
        {
            id: 5,
            title: 'Communication article',
            description: 'этих проблем настолько очевидна, что сложившаяся структура организации требует определения и уточнения модели развития.  Этих проблем настолько очевидна, что сложившаяся структура организации требует определения и уточнения модели развития.',
            create: '09.12.2023'
        },

    ]
}

const slice = createSlice({
    name: 'forum',
    initialState,
    reducers: {
        addForum: (state, action) => {
            state.forums = [...state.forums, action.payload]
        },
        deleteForum: (state, action) => {
            console.log(action.payload);
            state.forums = state.forums.filter(forum => forum.id !== action.payload)
        },
        editForum: (state, action) => {
            const { id, title, description } = action.payload;
            const forumToEdit = state.forums.find(forum => forum.id === id);
            if (forumToEdit) {
                forumToEdit.title = title;
                forumToEdit.description = description;
            }
        },
        deleteAllForums: (state) => {
            state.forums = [];
        },
    }
})

export const {
    addForum,
    deleteForum,
    editForum,
    deleteAllForums
} = slice.actions;
  
export default slice.reducer;