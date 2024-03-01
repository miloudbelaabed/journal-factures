import React, { Dispatch, createContext, useContext, useReducer } from "react"

interface IUpdateHeaderAction {
  type: string
  payload: string
}
export const HeaderContentContext = createContext<{
  headerContent: string
  dispatch: Dispatch<IUpdateHeaderAction>
}>({
  headerContent: "",
  dispatch: () => {},
})

const UPDATE_HEADER_CONTENT = "UPDATE_HEADER_CONTENT"

export function updateHeaderContentActionCreator(content: string) {
  return {
    type: UPDATE_HEADER_CONTENT,
    payload: content,
  }
}
function headerContentReducer(state: string, action: IUpdateHeaderAction) {
  switch (action.type) {
    case UPDATE_HEADER_CONTENT:
      return action.payload

    default:
      return state
  }
}

export default function HeaderProvide({
  children,
}: {
  children: JSX.Element[] | JSX.Element
}) {
  const [headerContent, dispatch] = useReducer(headerContentReducer, "")
  const headerContextValue = React.useMemo(
    () => ({ headerContent, dispatch }),
    [headerContent, dispatch]
  )

  return (
    <HeaderContentContext.Provider value={headerContextValue}>
      {children}
    </HeaderContentContext.Provider>
  )
}
export const useHeader = () => useContext(HeaderContentContext)
