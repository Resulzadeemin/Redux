const initialState = {
    count: 0
}


export function reducer(state = initialState, action) {
    switch (action.type) {
        case 'TOPLAMA':
            {
                return { count: state.count + 1 }
            }

        case 'CIXMA':
            {
                return { count: state.count - 1 }
            }
        case "VUR":
            {
                return { count: state.count * 2 }
            }
        case "BOLME":
            {
                return { count: state.count / 2 }
            }

        default: {
            return state
        }

    }
}