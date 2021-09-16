
import styled from 'styled-components/macro';
import { createUseStyles } from 'react-jss';


const App: React.FC = props => {

const StyledStepper = styled.div`
  border-bottom: 1px solid #d4d4d4;
  padding: 12px 40px;
  background-color: ${(props): string => props.theme.palette.color.white};
  color: ${(props): string => props.theme.palette.color.dark};
  font-size: 12px;
`;

    const useStyles = createUseStyles({
        stepper: props => {
            return {
                borderBottom: '1px solid #d4d4d4',
                padding: "12px 40px",
                backgroundColor: props.theme.palette.color.white,
                color: props.theme.palette.color.dark,
                fontSize: "12px"
            }
        }
    });

    const classes = useStyles();

    return (
        <>
            <StyledStepper />
            <div className={classes.stepper}></div>
        </>
    )
};