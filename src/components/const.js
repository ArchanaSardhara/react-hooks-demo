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

const USE_CALLBACK = "use-callback";
const USE_CONTEXT = "use-context";
const USE_DEBUG_VALUE = "use-debug-value";
const USE_EFFECT = "use-effect";
const USE_IMPERATIVE_HANDLE = "use-imperative-handle";
const USE_LAYOUT_EFFECT = "use-layout-effect";
const USE_MEMO = "use-memo";
const USE_REDUCER = "use-reducer";
const USE_REF = "use-ref";
const USE_STATE = "use-state";

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
];

export const USER_DATA = [
  {
    "_id": "600184060e88ea31abeb791e",
    "status": false,
    "name": "Bridgette Chang",
    "gender": "female",
    "email": "bridgettechang@snorus.com",
    "phone": "+1 (856) 450-3575"
  },
  {
    "_id": "60018406f7cbe86dc5f10317",
    "status": false,
    "name": "Ayers Garcia",
    "gender": "male",
    "email": "ayersgarcia@snorus.com",
    "phone": "+1 (801) 417-3905"
  },
  {
    "_id": "600184069430b482a7c41dd8",
    "status": true,
    "name": "Kinney Fleming",
    "gender": "male",
    "email": "kinneyfleming@snorus.com",
    "phone": "+1 (916) 586-2705"
  },
  {
    "_id": "600184067643e5935697ea1d",
    "status": false,
    "name": "Francesca Wooten",
    "gender": "female",
    "email": "francescawooten@snorus.com",
    "phone": "+1 (845) 477-2554"
  },
  {
    "_id": "60018406cd1c1e717295e7f7",
    "status": true,
    "name": "Wilda Cooke",
    "gender": "female",
    "email": "wildacooke@snorus.com",
    "phone": "+1 (879) 515-3810"
  },
  {
    "_id": "6001840628c0d56ab69b4f05",
    "status": true,
    "name": "Luisa Torres",
    "gender": "female",
    "email": "luisatorres@snorus.com",
    "phone": "+1 (937) 525-2469"
  }
]