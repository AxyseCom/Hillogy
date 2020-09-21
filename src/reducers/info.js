const initialState = 
{
	nameClass: "default-class-cat",
	toShowListBtn: false,
	dataProd: "",
	dataSrc: "",
	dataBool: false
}

export default function userInfo(state = initialState, action) {

	switch(action.type) {
		case "SET_BKG_CS": return {...state, nameClass: action.payload};
		break;
		case "SET_LIST_BTN": return {...state, toShowListBtn: action.payload};
		break;
		case "SET_DATA_PROD": return {...state, dataProd: action.payload};
		break;
		case "SET_DATA_SRC": return {...state, dataSrc: action.payload};
		break;
		case "SET_DATA_BOOL": return {...state, dataBool: action.payload};
		break;

		default: return state;
	}
}