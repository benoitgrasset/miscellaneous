
import styled, { CSSProperties } from 'styled-components';
import { createUseStyles } from 'react-jss';
// import JSSStyled from 'styled-jss';
import EmotionStyled from '@emotion/styled';
import { theme } from '../App';
import { makeStyles, createStyles, styled as MUIStyled } from "@material-ui/styles";


type Theme = typeof theme;

// Hook API with JSS object and react-jss library
const useStyles = createUseStyles({
    stepper: (props: Theme) => {
        return {
            borderBottom: '1px solid #d4d4d4',
            padding: "12px 40px",
            backgroundColor: props.palette.color.white,
            color: props.palette.color.orange,
            fontSize: "14px"
        }
    }
});

// Hook API with JSS object and @material-ui/styles library
const useStyles2 = makeStyles((theme: Theme) => createStyles({
    stepper: (props: Theme) => {
        return {
            borderBottom: '1px solid #d4d4d4',
            padding: "12px 40px",
            backgroundColor: props.palette.color.white,
            color: props.palette.color.orange,
            fontSize: "14px"
        }
    }
})
);

const Jss: React.FC<{ theme: Theme }> = props => {

    // styled components API with CSS syntax (string templates)
    const StyledStepper = styled.div`
  border-bottom: 1px solid #d4d4d4;
  padding: 12px 40px;
  background-color: ${(props): string => props.theme.palette.color.white};
  color: ${(props): string => props.theme.palette.color.orange};
  font-size: 14px;
`;
    StyledStepper.defaultProps = { theme };

    // typage
    const style: CSSProperties = {
        borderBottom: '1px solid #d4d4d4',
        padding: "12px 40px",
        backgroundColor: props.theme.palette.color.white,
        color: props.theme.palette.color.orange,
        fontSize: "14px"
    };

    // styled components API with JSS object
    const EmotionStyledStepper = EmotionStyled.div({
        borderBottom: '1px solid #2f37b1',
        padding: "12px 40px",
        backgroundColor: props.theme.palette.color.white,
        color: props.theme.palette.color.orange,
        fontSize: "14px"
    });

    const classes = useStyles2(props.theme);

    return (
        <>
            <StyledStepper>Styled components</StyledStepper>
            <EmotionStyledStepper>Emotion JSS Styled components</EmotionStyledStepper>
            <div className={classes.stepper}>Jss</div>
        </>
    )
};

export default Jss;