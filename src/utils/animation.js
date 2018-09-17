export const getAnimationClasses = (previous, next) => {

    const uiTransitions = {
      InitialState: {
        InitialState: {
          LeftPanel: 'panel sidePanel sidePanelOpenned',
          RightPanel: 'panel sidePanel sidePanelOpenned',
          CentralPanel: 'panel centralPanelShrinked',
          leftButton: 'buttonAbs buttonLeftPanelOpen',
          rightButton: 'buttonAbs buttonRightPanelOpen',
        },
        LeftOpenRightClosed: {
          LeftPanel: 'panel sidePanel sidePanelOpenned',
          RightPanel: 'panel sidePanel sidePanelClosing',
          CentralPanel: 'panel centralPanelExpandingOneSide',
          leftButton: 'buttonAbs buttonLeftPanelOpen',
          rightButton: 'buttonAbs buttonRightMovingRight',
        },
        LeftClosedRightOpen: {
          LeftPanel: 'panel sidePanel sidePanelClosing',
          RightPanel: 'panel sidePanel sidePanelOpenned',
          CentralPanel: 'panel centralPanelExpandingOneSide',
          leftButton: 'buttonAbs buttonLeftMovingLeft',
          rightButton: 'buttonAbs buttonRightPanelOpen',
        }
      },
      LeftOpenRightOpen: {
        LeftOpenRightClosed: {
          LeftPanel: 'panel sidePanel sidePanelOpenned',
          RightPanel: 'panel sidePanel sidePanelClosing',
          CentralPanel: 'panel centralPanelExpandingOneSide',
          leftButton: 'buttonAbs buttonLeftPanelOpen',
          rightButton: 'buttonAbs buttonRightMovingRight',
        },
        LeftClosedRightOpen: {
          LeftPanel: 'panel sidePanel sidePanelClosing',
          RightPanel: 'panel sidePanel sidePanelOpenned',
          CentralPanel: 'panel centralPanelExpandingOneSide',
          leftButton: 'buttonAbs buttonLeftMovingLeft',
          rightButton: 'buttonAbs buttonRightPanelOpen',
        }
      },
      LeftOpenRightClosed: {
        LeftOpenRightOpen: {
          LeftPanel: 'panel sidePanel sidePanelOpenned',
          RightPanel: 'panel sidePanel sidePanelOpenning',
          CentralPanel: 'panel centralPanelShrinkingOneSide',
          leftButton: 'buttonAbs buttonLeftPanelOpen',
          rightButton: 'buttonAbs buttonRightMovingLeft',
        },
        LeftClosedRightClosed: {
          LeftPanel: 'panel sidePanel sidePanelClosing',
          RightPanel: 'panel sidePanel sidePanelClosed',
          CentralPanel: 'panel centralPanelExpandingTwoSides',
          leftButton: 'buttonAbs buttonLeftMovingLeft',
          rightButton: 'buttonAbs buttonRightPanelClosed',
        }
      },
      LeftClosedRightClosed: {
        LeftOpenRightClosed: {
          LeftPanel: 'panel sidePanel sidePanelOpenning',
          RightPanel: 'panel sidePanel sidePanelClosed',
          CentralPanel: 'panel centralPanelShrinkingTwoSides',
          leftButton: 'buttonAbs buttonLeftMovingRight',
          rightButton: 'buttonAbs buttonRightPanelClosed',
        },
        LeftClosedRightOpen: {
          LeftPanel: 'panel sidePanel sidePanelClosed',
          RightPanel: 'panel sidePanel sidePanelOpenning',
          CentralPanel: 'panel centralPanelShrinkingTwoSides',
          leftButton: 'buttonAbs buttonLeftPanelClosed',
          rightButton: 'buttonAbs buttonRightMovingLeft',
        }
      },
      LeftClosedRightOpen: {
        LeftClosedRightClosed: {
          LeftPanel: 'panel sidePanel sidePanelClosed',
          RightPanel: 'panel sidePanel sidePanelClosing',
          CentralPanel: 'panel centralPanelExpandingTwoSides',
          leftButton: 'buttonAbs buttonLeftPanelClosed',
          rightButton: 'buttonAbs buttonRightMovingRight',
        },
        LeftOpenRightOpen: {
          LeftPanel: 'panel sidePanel sidePanelOpenning',
          RightPanel: 'panel sidePanel sidePanelOpenned',
          CentralPanel: 'panel centralPanelShrinkingOneSide',
          leftButton: 'buttonAbs buttonLeftMovingRight',
          rightButton: 'buttonAbs buttonRightPanelOpen',
        }
      }
    }

    return {
        LeftPanel: uiTransitions[previous][next]['LeftPanel'],
        RightPanel: uiTransitions[previous][next]['RightPanel'],
        CentralPanel: uiTransitions[previous][next]['CentralPanel'],
        leftButton: uiTransitions[previous][next]['leftButton'],
        rightButton: uiTransitions[previous][next]['rightButton'],
    };
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
