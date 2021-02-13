import { css, space, ThemeConfig } from 'bumbag'

const theme: ThemeConfig = {
  global: {
    fontSize: 16,
    styles: {
      base: css`
        html,
        body {
          background-color: #f9f9f9;
        }
        .DayPickerInput {
          width: 100%;
        }
        form {
          width: 100%;
        }
        button::focus {
          outline: none !important;
        }
        .bb-TooltipContent {
          z-index: 999999999999 !important;
        }
        .App {
          text-align: left;
          background-color: #222;
          color: white;
        }
        
        .App-logo {
          animation: App-logo-spin infinite 20s linear;
          height: 80px;
        }
        
        .App-header {
          background-color: #222;
          padding: 20px;
          padding-top: 60px;
          color: white;
        }
        
        .App-title {
          font-size: 1.5em;
        }
        
        .App-intro {
          font-size: large;
        }
        
        .Ticker-stat {
          max-width: 300px;
          border-bottom-style: dotted;
          border-bottom-width: 1px;
          border-bottom-color: white;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        
        .OrderBook-main-trades {
          padding: 20px;
          background-color: #222;
          flex: 1;
        }
        
        .OrderBook-main {
          padding: 20px;
          background-color: #222;
          flex: 2;
        }
        
        .OrderBook {
          display: flex;
          flex-direction: row;
          background-color: #222;
          justify-content: space-between;
          color: white;
          border-top-style: dotted;
          border-top-color: white;
          border-top-width: 1px;
        
        }
        @media (max-width:500px) {
          .OrderBook { flex-direction: column; }
        }
        
        @media (min-width:500px) {
          .App-wide {
            display: flex;
            flex-direction: row;
            align-items: stretch;
          }
        }
        
        .OrderBook-panel {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          flex: 1;
          padding: 10px;
        }
        
        .OrderBook-wide {
          display: flex;
          justify-content: space-between;
          flex: 1;
          padding-top: 10px;
          padding-bottom: 10px;
        }
        
        .OrderBook-green {
          display: flex;
          justify-content: space-between;
          flex: 1;
          color: #00ff00;
          /*background-color: pink;*/
          -webkit-animation-duration: 60s;animation-duration: 60s;
                    -webkit-animation-fill-mode: both;animation-fill-mode: both;
          -webkit-animation-name: fadeOut;
        }
        
        @-webkit-keyframes fadeOut {
                    0% {opacity: 1;}
                    100% {opacity: 0.5;}
                 }
        
                 @keyframes fadeOut {
                    0% {opacity: 1;}
                    100% {opacity: 0.5;}
                 }
        
        .OrderBook-red {
          display: flex;
          justify-content: space-between;
          flex: 1;
          color: #ff1a1a;
          -webkit-animation-duration: 60s;animation-duration: 60s;
                    -webkit-animation-fill-mode: both;animation-fill-mode: both;
          -webkit-animation-name: fadeOut;
        }
        
        .fadeOut {
           -webkit-animation-name: fadeOut;
           animation-name: fadeOut;
        }
        
        .Websocket-switch {
          margin-bottom: 10px;
          border-radius: 5px;
          padding: 10px;
          border-style: solid;
          border-width: 1px;
          border-color: white;
          width: 200px;
          text-align: center;
        }
        
        .Websocket-switch:hover {
          background-color: gray;
          cursor: pointer;
        }
        
      `,
    },
  },

  fonts: {
    default: 'Roboto, sans-serif',
  },
  fontWeights: {
    Thin: 100,
    ExtraLight: 200,
    Light: 300,
    Regular: 400,
    Medium: 500,
    normal: 700,
    ExtraBlack: 900,
  },
  palette: {
    primary: '#5558ff',
    primary100: '#ddddff',

    secondary: '#ff5555',
    secondary100: '#FFE8DD',

    text: '#1B1B1B',
    textTint: '#8E8D8D',

    white600: '#fafafa',
    white700: '#f9f9f9',
    white800: '#f3f3f3',

    warning200: '#fff6d9',
    warning: '#ffb541',

    black100: '#F9F9F9',
    black200: '#F0EEF1',
    black300: '#C7C7C7',
    black400: '#8E8D8D',
    black: '#1B1B1B',
    black600: '#0C0C0C',

    green500: '#22BA46',
    green300: '#77EA7C',
    green100: '#D8FBD2',

    red100: '#FDE2D4',
    red300: '#F4937D',
    red500: '#DD2B2A',
    orange500: '#FFB541',
    orange300: '#FFDB8D',
    orange100: '#FFF6D9',

    grey500: '#1b262d',
    grey300: '#899094'
  },
  borderRadii: {
    default: '6px',
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '16px',
    full: '50%',
  },
  borders: {
    primary: {
      color: '#5558ff',
      width: '1px',
    },
    grey: {
      color: '#7e84a0',
      width: '1px',
    },
    orange: {
      color: '#FFDB8D',
      width: '1px',
    },
  },
  altitudes: {
    100: 'box-shadow: 0px 4px 2px 0px rgba(0, 0, 0, 0.02)',
  },
  spacing: {
    xs /* 4 */: space(1, 'minor'),
    sm /* 8 */: space(2, 'minor'),
    md /* 12 */: space(3, 'minor'),
    lg /* 16 */: space(4, 'minor'),
    xl /* 20 */: space(5, 'minor'),
    '2xl' /* 24 */: space(6, 'minor'),
    '3xl' /* 28 */: space(7, 'minor'),
    '4xl' /* 32 */: space(8, 'minor'),
    '5xl' /* 36 */: space(9, 'minor'),
    '6xl' /* 40 */: space(10, 'minor'),
    '7xl' /* 44 */: space(11, 'minor'),
    '8xl' /* 48 */: space(12, 'minor'),
    xxl /* 96 */: space(24, 'minor'),
  },
  Pagination: {
    styles: {
      base: {
        justifyContent: 'center !important',
      },
    },
    Select: {
      styles: {
        base: {
          width: 'auto !important',
        },
      },
    },
  },
  Select: {
    styles: {
      base: {
        width: '100%',
      },
    },
    Wrapper: {
      styles: {
        base: {
          width: '100%',
        },
      },
    },
  },
  PageWithSidebar: {
    styles: {
      base: {
        transition: 'all .5s',
        border: 'none',
      },
    },
    SidebarExpandedWrapper: {
      styles: {
        base: {
          overflow: 'hidden',
        },
      },
    },
    Sidebar: {
      styles: {
        base: {
          transition: 'all .5s',
          border: 'none',
        },
      },
    },
    Content: {
      styles: {
        base: {
          transition: 'all .5s',
        },
      },
    },
  },
  Input: {
    styles: {
      base: {
        fontWeight: 500,
      },
      placeholder: {
        fontWeight: 500,
      },
    },
  },
  Tooltip: {
    Content: {
      styles: {
        base: {
          background: 'black',
          borderRadius: 'md',
          color: 'white',
          fontWeight: 'bold',
          zIndex: 99999999,
        },
      },
    },
  },
  Button: {
    styles: {
      base: {
        borderRadius: '30px',
      },
    },
  },
  Checkbox: {
    Label: {
      styles: {
        base: {
          fontSize: '12px',
          fontWeight: 'normal',
        },
      },
    },
  },
  Toast: {
    placement: 'top',
  },
  FieldWrapper: {
    TooltipPopover: {
      styles: {
        base: {
          maxWidth: '200px !important',
          padding: '12px !important',
          borderRadius: '8px !important',
          border: 'orange',
        },
      },
    },
  },
}

export default theme
