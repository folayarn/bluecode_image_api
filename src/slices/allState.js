import { createSlice} from "@reduxjs/toolkit";


export const initialState = {
  data:[],
  openDrawer: false,
  iserr: false,
  loading: false,
issearch:false
}


const othersSlice = createSlice({
  name: "state",
  initialState,
  reducers:{
   setLoading:(state,action)=>{
      state.loading=action.payload
    },
    setErr:(state,action)=>{
      state.iserr=action.payload
    },
    setDrawer:(state,action)=>{

      state.openDrawer=action.payload
    },
    setData:(state,action)=>{
      state.data=action.payload
    },
    setSearch:(state,action)=>{
      state.issearch=action.payload
    }
  }
}
)



export const {setDrawer,setData,setLoading,setErr,setSearch}=othersSlice.actions
export default othersSlice.reducer