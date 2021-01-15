import UseCallbackComponent from "./use-callback";
import UseContextComponent from "./use-context";
import UseDebugValueComponent from "./use-debugvalue";
import UseEffectComponent from "./use-effect";
import UseImperativeHandleComponent from "./use-imperativehandle";
import UseLayoutEffectComponent from "./use-layouteffect";
import UseMemoComponent from "./use-memo";
import UseReducerComponent from "./use-reducer";
import UseRefComponent from "./use-ref";
import UseStateComponent from "./use-state";

const USE_CALLBACK = "USE_CALLBACK";
const USE_CONTEXT = "USE_CONTEXT";
const USE_DEBUG_VALUE = "USE_DEBUG_VALUE";
const USE_EFFECT = "USE_EFFECT";
const USE_IMPERATIVE_HANDLE = "USE_IMPERATIVE_HANDLE";
const USE_LAYOUT_EFFECT = "USE_LAYOUT_EFFECT";
const USE_MEMO = "USE_MEMO";
const USE_REDUCER = "USE_REDUCER";
const USE_REF = "USE_REF";
const USE_STATE = "USE_STATE";

export const HOOKLIST = [
  {
    name: USE_CALLBACK,
    title: "Use Callback",
    Component: UseCallbackComponent
  },
  {
    name: USE_CONTEXT,
    title: "Use Context",
    Component: UseContextComponent
  },
  {
    name: USE_DEBUG_VALUE,
    title: "Use DebugValue",
    Component: UseDebugValueComponent
  },
  {
    name: USE_EFFECT,
    title: "Use Effect",
    Component: UseEffectComponent
  },
  {
    name: USE_IMPERATIVE_HANDLE,
    title: "Use ImperativeHandle",
    Component: UseImperativeHandleComponent
  },
  {
    name: USE_LAYOUT_EFFECT,
    title: "Use LayoutEffect",
    Component: UseLayoutEffectComponent
  },
  {
    name: USE_MEMO,
    title: "Use Memo",
    Component: UseMemoComponent
  },
  {
    name: USE_REDUCER,
    title: "Use Reducer",
    Component: UseReducerComponent
  },
  {
    name: USE_REF,
    title: "Use Ref",
    Component: UseRefComponent
  },
  {
    name: USE_STATE,
    title: "Use State",
    Component: UseStateComponent
  }
]