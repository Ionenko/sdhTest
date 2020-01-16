import React, {useEffect, useRef, useState} from 'react';
import DateFnsUtils from '@date-io/date-fns';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import SaveSharpIcon from "@material-ui/icons/SaveSharp";
import FormHelperText from "@material-ui/core/FormHelperText";
import {format} from "date-fns";

const UserForm = (props) => {

    const [labelWidth, setLabelWidth] = useState(0);

    const inputLabelRef = useRef(null);

    const {
        editing,
        values: user,
        classes,
        errors,
        touched,
        handleSubmit,
        handleChange,
        setFieldValue,
        isValid,
        resetForm
    } = props;

    useEffect(() =>{
        setLabelWidth(inputLabelRef.current.offsetWidth);
        !editing && resetForm({
            values : {
                first_name: '',
                last_name: '',
                birth_date: format(new Date(), 'yyyy-MM-dd'),
                gender: '',
                job: '',
                biography: '',
                is_active:  false
            }
        })
    },[editing, resetForm]);

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify='center' >
                <Grid item xs={12} md={6}>
                    <Paper className={classes.content} elevation={4}>
                        <form className={classes.root} noValidate onSubmit={handleSubmit} autoComplete="off">
                            <TextField
                                name='first_name'
                                helperText={touched.first_name ? errors.first_name : ""}
                                error={Boolean(errors.first_name)}
                                label="First name"
                                value={user.first_name}
                                onChange={handleChange}
                                fullWidth
                                variant="outlined"
                            />
                            <TextField
                                name='last_name'
                                helperText={touched.last_name ? errors.last_name : ""}
                                error={Boolean(errors.last_name)}
                                label="Last name"
                                value={user.last_name}
                                onChange={handleChange}
                                fullWidth
                                variant="outlined"
                            />
                            <KeyboardDatePicker
                                autoOk
                                margin="normal"
                                name='birth_date'
                                label="Birth date"
                                inputVariant="outlined"
                                format="yyyy-MM-dd"
                                value={user.birth_date}
                                onChange={value => setFieldValue("birth_date", value)}
                                fullWidth
                                KeyboardButtonProps={{
                                    'aria-label': 'Change birth date',
                                }}
                            />

                            <FormControl fullWidth variant="outlined" error={Boolean(errors.gender)} >
                                <InputLabel ref={inputLabelRef} >
                                    Gender
                                </InputLabel>
                                <Select
                                    value={user.gender}
                                    name="gender"
                                    onChange={handleChange}
                                    labelWidth={labelWidth}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={'male'}>Male</MenuItem>
                                    <MenuItem value={'female'}>Female</MenuItem>
                                </Select>
                                <FormHelperText>{touched.gender ? errors.gender : ""}</FormHelperText>
                            </FormControl>
                            <TextField
                                name='job'
                                helperText={touched.job ? errors.job : ""}
                                error={Boolean(errors.job)}
                                label="Job"
                                value={user.job}
                                onChange={handleChange}
                                fullWidth
                                variant="outlined"
                            />
                            <TextField
                                name='biography'
                                helperText={touched.biography ? errors.biography : ""}
                                error={Boolean(errors.biography)}
                                label="Biography"
                                value={user.biography}
                                onChange={handleChange}
                                fullWidth
                                multiline
                                rows="5"
                                variant="outlined"
                            />
                            <FormControl fullWidth >
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={user.is_active}
                                            onChange={handleChange}
                                            name='is_active'
                                            color="primary"
                                        />
                                    }
                                    label="User is active"
                                />
                            </FormControl>

                            <Grid container>
                                <Button
                                    disabled={!isValid}
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    className={classes.button}
                                    startIcon={<SaveSharpIcon />}
                                >
                                    {
                                        editing ? ' Save user data' : ' Add user'
                                    }
                                </Button>
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </Grid>

        </MuiPickersUtilsProvider>
    );
};

export default UserForm;