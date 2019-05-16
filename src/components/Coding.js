import React, { Component } from 'react';



class Coding extends Component {

    state = {
        password: '',
        message: '',
        email: '',
        correct: false,
        messageSend: '',

        errors: {
            password: false,
            passwordToShort: false,
            message: false,
            email: false,
        },

        styles: {
            password: 'form-control margin center',
            message: 'form-control margin center',
            email: 'form-control margin center',
        }
    }

    messages = {
        password_error: 'The key is too short',
        password_error2: 'The key is too long',
        message_error: 'The text is too long',
        email_error: 'Check if the mail is correct'
    }

    // passwordInValid: "form-control margin3 center is-invalid",
    // passwordValid: "form-control margin is-valid",



    handleChange = event => {

        const id = event.target.id
        const value = event.target.value

        this.setState({
            [id]: value
        })
    }

    handleResetAll = () => {
        this.setState({
            password: '',
            message: '',
            email: '',
            correct: false,
            messageSend: '',

            errors: {
                password: false,
                passwordToShort: false,
                message: false,
                email: false
            }
        })
    }


    // messageToCode = () => {
    //     let message = this.state.message
    //     let key = this.state.password.length
    //     let codeMessage = ''

    //     let newMessage = message.toUpperCase().replace(/Ą/g, 'A').replace(/Ć/g, 'C').replace(/Ę/g, 'E').replace(/Ł/g, 'L').replace(/Ń/g, 'N').replace(/Ó/g, 'O').replace(/Ś/g, 'S').replace(/Ż/g, 'Z').replace(/Ź/g, 'Z')

    //     codeMessage = newMessage.replace(/[A-Z]/g, imput => String.fromCharCode((imput.charCodeAt(0) - 65 + key) % 26 + 65));

    //     this.setState({
    //         message: codeMessage
    //     })
    // }

    // codeToMessage = () => {
    //     let message = this.state.message
    //     let key = this.state.password.length - (this.state.password.length * 2)
    //     let noCodeMessage = ''

    //     noCodeMessage = (message, key) => {
    //         if (key < 0)
    //             return noCodeMessage(message, key + 26);
    //         let output = '';
    //         for (let i = 0; i < message.length; i++) {
    //             let c = message[i];
    //             if (c.match(/[A-Z]/)) {
    //                 let code = message.charCodeAt(i);
    //                 if ((code >= 65) && (code <= 90))
    //                     c = String.fromCharCode(((code - 65 + key) % 26) + 65);
    //                 else if ((code >= 97) && (code <= 122))
    //                     c = String.fromCharCode(((code - 97 + key) % 26) + 97);
    //             }
    //             output += c
    //         }
    //         return output;
    //     };
    //     this.setState({
    //         message: noCodeMessage
    //     })

    // }

    CodeValidation = () => {
        //sprawdza tylko to co potrzebne do kodowania
        let password = false
        let passwordToShort = false
        let message = false
        let correct = false

        if (this.state.password.length > 4) {
            passwordToShort = true;
        }
        if (this.state.password.length <= 25) {
            password = true;
        }
        if (this.state.message.length < 51) {
            message = true
        }
        if (password && passwordToShort && message) {
            correct = true
        }

        return ({
            password,
            passwordToShort,
            message,
            correct
        })

    }


    handleCodeMessage = event => {

        const validation = this.CodeValidation()

        if (validation.correct) {

            console.log("tłumaczymy")
            //kod tłumaczący message

        } else {
            console.log("Aktualizuję błędy")
            this.setState({
                errors: {
                    password: !validation.password,
                    passwordToShort: !validation.passwordToShort,
                    message: !validation.message,
                },

            })
        }
        //zmiana stylu po błędzie 


    }


    formValidation = () => {
        let password = false;
        let passwordToShort = false;
        let message = false;
        let email = false;
        let correct = false;

        if (this.state.password.length > 0 && this.state.password.length < 4) {
            passwordToShort = true;

        }
        if (this.state.password.length >= 25) {
            password = true;
        }
        if (this.state.message.length > 51) {
            message = true
        }
        if (this.state.email.length > 7 && this.state.email.indexOf('@') !== -1) {
            email = true
        }
        if (password && message && email) {
            correct = true
        }

        return ({
            password,
            passwordToShort,
            message,
            email,
            correct,
        })
    }


    handleSubmit = event => {
        event.preventDefault()

        const validation = this.formValidation()

        if (validation.correct) {
            this.setState({
                password: "",
                passwordToShort: false,
                message: "",
                email: '',
                correct: false,
                messageSend: 'Success! Message was sent',

                errors: {
                    password: false,
                    passwordToShort: false,
                    message: false,
                    email: false
                }

            })

        } else {
            this.setState({
                errors: {
                    password: !validation.password,
                    passwordToShort: !validation.passwordToShort,
                    message: !validation.message,
                    email: !validation.email
                }
            })
        }

    }

    checkStyle() {

        if (this.state.errors.password) {
            console.log("checkstyle wykonane")
            this.setState({
                styles: {
                    password: 'form-control margin3 center is-invalid'
                }
            })
            setTimeout(() => {
                this.setState({
                    styles: {
                        password: 'form-control margin center'
                    }
                })
            }, 2000)
        }

    }




    componentDidUpdate() {
        if (this.state.errors.password || this.state.errors.passwordToShort) {

            setTimeout(() => {
                this.setState({
                    errors: {
                        password: false,
                        passwordToShort: false
                    }
                })
            }, 2000)
        }

    }


    render() {

        const { password, message, email, passwordToShort } = this.state



        return (
            <form onSubmit={this.handleSubmit} noValidate>
                <div className="container">
                    <div className="marginTop">




                        <div className="row">
                            <div className="col col-lg-2 right">
                                <label htmlFor="exampleInputPassword1" className="margin">Enter the key:</label>
                            </div>

                            <div className="col col-md-4 center">

                                <input type="password" className={this.state.styles.password} id="password" aria-describedby="inputGroupPrepend3" required value={this.state.password} onChange={this.handleChange} />
                                <div className="margin2">


                                    {this.state.errors.password && <center>{this.messages.password_error2}</center>}

                                    {this.state.errors.passwordToShort && <center>{this.messages.password_error}</center>}


                                </div>
                            </div>

                            <div className="col col-lg-2">
                            </div>
                        </div>


                        <div className="row">
                            <div className="col col-lg-2 right">
                                <label htmlFor="exampleFormControlTextarea1" className="margin">Message:</label>
                            </div>

                            <div className="col col-md-4">
                                <textarea className={this.state.styles.message} id="message" rows="5" aria-describedby="inputGroupPrepend3" required value={this.state.message} onChange={this.handleChange} />
                                <div className="margin2">

                                    {this.state.errors.message && <center>{this.messages.message_error}</center>}

                                </div>
                            </div>


                            <div className="col col-lg-2 margin">
                                <button
                                    type="button"
                                    className="btn btn-outline-primary btnBreak2"
                                    onClick={this.handleCodeMessage}
                                >Encryption</button>
                                <button
                                    type="button"
                                    className="btn btn-outline-primary btnBreak"
                                    onClick={this.codeToMessage}
                                >Decryption</button>
                                <button
                                    type="button"
                                    className="btn btn-outline-primary btnBreak2"
                                    onClick={this.handleResetAll}
                                >Reset</button>
                            </div>

                        </div>



                        <div className="row">
                            <div className="col col-lg-2 right">
                                <label htmlFor="exampleInputEmail1" className="margin">E-mail:</label>
                            </div>

                            <div className="col col-md-4">
                                <input type="email" className={this.state.styles.email} id="email" aria-describedby="emailHelp" placeholder="Send a message to your friend" value={this.state.email} onChange={this.handleChange} />

                                <div className="invalid-feedback margin2">
                                    {this.state.errors.email && this.messages.email_error}
                                </div>
                            </div>

                            <div className="col col-lg-2 margin">
                                <button className="btn btn-outline-primary btnBreak2" type="submit">Send</button>
                            </div>

                        </div>




                    </div>
                </div>
            </form>
        );
    }
}

export default Coding;