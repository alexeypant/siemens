export const getAnimationClasses = (previous, next, uiComponent) => {

  const uiTransitions = {
    InitialState: {
      InitialState: {
        LeftPanel: 'panel sidePanelOpenned',
        RightPanel: 'panel sidePanelOpenned',
        CentralPanel: 'panel centralPanelShrinked',
        leftButton: 'buttonLeft',
      },
      LeftOpenRightClosed: {
        LeftPanel: 'panel sidePanelOpenned',
        RightPanel: 'panel sidePanelClosing',
        CentralPanel: 'panel centralPanelExpandingOneSide',
      },
      LeftClosedRightOpen: {
        LeftPanel: 'panel sidePanelClosing',
        RightPanel: 'panel sidePanelOpenned',
        CentralPanel: 'panel centralPanelExpandingOneSide',
        leftButton: 'buttonLeftMovingLeft',
      }
    },
    LeftOpenRightOpen: {
      LeftOpenRightClosed: {
        LeftPanel: 'panel sidePanelOpenned',
        RightPanel: 'panel sidePanelClosing',
        CentralPanel: 'panel centralPanelExpandingOneSide',
      },
      LeftClosedRightOpen: {
        LeftPanel: 'panel sidePanelClosing',
        RightPanel: 'panel sidePanelOpenned',
        CentralPanel: 'panel centralPanelExpandingOneSide',
      }
    },
    LeftOpenRightClosed: {
      LeftOpenRightOpen: {
        LeftPanel: 'panel sidePanelOpenned',
        RightPanel: 'panel sidePanelOpenning',
        CentralPanel: 'panel centralPanelShrinkingOneSide',
      },
      LeftClosedRightClosed: {
        LeftPanel: 'panel sidePanelClosing',
        RightPanel: 'panel sidePanelClosed',
        CentralPanel: 'panel centralPanelExpandingTwoSides',
      }
    },
    LeftClosedRightClosed: {
      LeftOpenRightClosed: {
        LeftPanel: 'panel sidePanelOpenning',
        RightPanel: 'panel sidePanelClosed',
        CentralPanel: 'panel centralPanelShrinkingTwoSides',
      },
      LeftClosedRightOpen: {
        LeftPanel: 'panel sidePanelClosed',
        RightPanel: 'panel sidePanelOpenning',
        CentralPanel: 'panel centralPanelShrinkingTwoSides',
      }
    },
    LeftClosedRightOpen: {
      LeftClosedRightClosed: {
        LeftPanel: 'panel sidePanelClosed',
        RightPanel: 'panel sidePanelClosing',
        CentralPanel: 'panel centralPanelExpandingTwoSides',
      },
      LeftOpenRightOpen: {
        LeftPanel: 'panel sidePanelOpenning',
        RightPanel: 'panel sidePanelOpenned',
        CentralPanel: 'panel centralPanelShrinkingOneSide',
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