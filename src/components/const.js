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

export const HOOKLIST = [
  {
    name: "use_callback",
    title: "Use Callback",
    Component: UseCallbackComponent
  },
  {
    name: "use_context",
    title: "Use Context",
    Component: UseContextComponent
  },
  {
    name: "use_debug_value",
    title: "Use DebugValue",
    Component: UseDebugValueComponent
  },
  {
    name: "use_effect",
    title: "Use Effect",
    Component: UseEffectComponent
  },
  {
    name: "use_imperative_handle",
    title: "Use ImperativeHandle",
    Component: UseImperativeHandleComponent
  },
  {
    name: "use_layout_effect",
    title: "Use LayoutEffect",
    Component: UseLayoutEffectComponent
  },
  {
    name: "use_memo",
    title: "Use Memo",
    Component: UseMemoComponent
  },
  {
    name: "use_reducer",
    title: "Use Reducer",
    Component: UseReducerComponent
  },
  {
    name: "use_ref",
    title: "Use Ref",
    Component: UseRefComponent
  },
  {
    name: "use_state",
    title: "Use State",
    Component: UseStateComponent
  }
]