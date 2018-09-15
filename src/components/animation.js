export const getAnimationClasses = (previous, next, uiComponent) => {

  const uiTransitions = {
    InitialState: {
      InitialState: {
        LeftPanel: 'panel sidePanelOpenned',
        RightPanel: 'panel sidePanelOpenned',
        CentralPanel: 'panel centralPanelShrinked',
        leftButton: 'buttonAbs buttonLeftPanelOpen',
      },
      LeftOpenRightClosed: {
        LeftPanel: 'panel sidePanelOpenned',
        RightPanel: 'panel sidePanelClosing',
        CentralPanel: 'panel centralPanelExpandingOneSide',
        leftButton: 'buttonAbs buttonLeftPanelOpen',
      },
      LeftClosedRightOpen: {
        LeftPanel: 'panel sidePanelClosing',
        RightPanel: 'panel sidePanelOpenned',
        CentralPanel: 'panel centralPanelExpandingOneSide',
        leftButton: 'buttonAbs buttonLeftMovingLeft',
      }
    },
    LeftOpenRightOpen: {
      LeftOpenRightClosed: {
        LeftPanel: 'panel sidePanelOpenned',
        RightPanel: 'panel sidePanelClosing',
        CentralPanel: 'panel centralPanelExpandingOneSide',
        leftButton: 'buttonAbs buttonLeftPanelOpen'
      },
      LeftClosedRightOpen: {
        LeftPanel: 'panel sidePanelClosing',
        RightPanel: 'panel sidePanelOpenned',
        CentralPanel: 'panel centralPanelExpandingOneSide',
        leftButton: 'buttonAbs buttonLeftMovingLeft',
      }
    },
    LeftOpenRightClosed: {
      LeftOpenRightOpen: {
        LeftPanel: 'panel sidePanelOpenned',
        RightPanel: 'panel sidePanelOpenning',
        CentralPanel: 'panel centralPanelShrinkingOneSide',
        leftButton: 'buttonAbs buttonLeftPanelOpen',
      },
      LeftClosedRightClosed: {
        LeftPanel: 'panel sidePanelClosing',
        RightPanel: 'panel sidePanelClosed',
        CentralPanel: 'panel centralPanelExpandingTwoSides',
        leftButton: 'buttonAbs buttonLeftMovingLeft',
      }
    },
    LeftClosedRightClosed: {
      LeftOpenRightClosed: {
        LeftPanel: 'panel sidePanelOpenning',
        RightPanel: 'panel sidePanelClosed',
        CentralPanel: 'panel centralPanelShrinkingTwoSides',
        leftButton: 'buttonAbs buttonLeftMovingRight',
      },
      LeftClosedRightOpen: {
        LeftPanel: 'panel sidePanelClosed',
        RightPanel: 'panel sidePanelOpenning',
        CentralPanel: 'panel centralPanelShrinkingTwoSides',
        leftButton: 'buttonAbs buttonLeftPanelClosed',
      }
    },
    LeftClosedRightOpen: {
      LeftClosedRightClosed: {
        LeftPanel: 'panel sidePanelClosed',
        RightPanel: 'panel sidePanelClosing',
        CentralPanel: 'panel centralPanelExpandingTwoSides',
        leftButton: 'buttonAbs buttonLeftPanelClosed',
      },
      LeftOpenRightOpen: {
        LeftPanel: 'panel sidePanelOpenning',
        RightPanel: 'panel sidePanelOpenned',
        CentralPanel: 'panel centralPanelShrinkingOneSide',
        leftButton: 'buttonAbs buttonLeftMovingRight',
      }
    }
  }
  const value = uiTransitions[previous][next][uiComponent];
  return value;
}

export const getNextUIState = (previous, buttonSide) => {
  const UIStates = {
    InitialState: {
      leftSideButton: 'LeftClosedRightOpen',
      rightSideButton: 'LeftOpenRightClosed',
    },
    LeftOpenRightOpen: {
      leftSideButton: 'LeftClosedRightOpen',
      rightSideButton: 'LeftOpenRightClosed',
    },
    LeftOpenRightClosed: {
      leftSideButton: 'LeftClosedRightClosed',
      rightSideButton: 'LeftOpenRightOpen',
    },
    LeftClosedRightClosed: {
      leftSideButton: 'LeftOpenRightClosed',
      rightSideButton: 'LeftClosedRightOpen',
    },
    LeftClosedRightOpen: {
      leftSideButton: 'LeftOpenRightOpen',
      rightSideButton: 'LeftClosedRightClosed',
    },
  }
  return UIStates[previous][buttonSide];
}

// uiStates: 
//     InitialState
//     LeftOpenRightOpen
//     LeftOpenRightClosed
//     LeftClosedRightClosed
//     LeftClosedRightOpen

// uiElements:
//     LeftPanel
//     CentralPanel
//     RightPanel