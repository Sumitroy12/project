import React from "react";
// import auth from "../../../services/authService";
import formService from "../../../services/formService";

import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import OneForm from "./OneForm";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

function Forms(props) {
  const classes = useStyles();
  console.log("I am props from form",props)
  

  // const [user, setUser] = React.useState({});
  const [forms, setForms] = React.useState([]);
  const [loadingForms, setLoadingForms] = React.useState(true);

  // React.useEffect(() => {
  //   setUser(auth.getCurrentUser);
  // }, []);

  const user = JSON.parse(localStorage.getItem(`user`))
  console.log("i am from form",user)

  React.useEffect(() => {
    console.log("Hey from Forms props id",user._id);
    if (user._id!== undefined) {
      //console.log("this shit is undefined");
      formService.getForms(user._id).then(
        (forms2) => {
          console.log("Hey from Forms",forms2);
          
          setForms(forms2);

          // setForms([...forms, forms2]);
          setLoadingForms(false);
        },

        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          console.log(resMessage);
        }
      );
    }
  }, [props.userId]);

  return (
    <div>
      <div>
        <CssBaseline />
        {loadingForms ? <CircularProgress /> : ""}
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={6}>
            {forms.map((form) => <OneForm formData={form} />)}
          </Grid>
        </Container>
      </div>
      <div></div>
    </div>
  );
}

export default Forms;
