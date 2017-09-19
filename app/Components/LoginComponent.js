import React from 'react';

class LoginComponent extends React.Component {
	 constructor(props) {
		super(props);

		// set the initial component state
		this.state = {
			error: '',
			userInfo: {
				username: '',
				password: '' 
			}
			
		};

		this._onLogin = this._onLogin.bind(this);
		this._onChangeUser =this._onChangeUser.bind(this);
		this.changeState = this.changeState.bind(this);
	}
	_onChangeUser(event,inputPropName) {
			const newState = Object.assign({}, this.state);
			newState.userInfo[inputPropName] = event.target.value;
			this.setState(newState);
	}
      render(){
        return (
           
		<form className='form' onSubmit={event=>this._onLogin(event)}>
			<h3> Login </h3>
			<p className="error-message">{this.state.error}</p>
			<div className='form__field-wrapper'>
				<label className='form__field-label' htmlFor='username'>
					Username
				</label>
				<input className='form__field-input' type='text' id='username' 
					placeholder='username' onChange={event=>this._onChangeUser(event,'username')}
					value={this.state.userInfo.username} />
			</div>
			<div className='form__field-wrapper'>
				<label className='form__field-label' htmlFor='password'>
					Password
				</label>
				<input className='form__field-input' id='password' type='password'
					placeholder='••••••••••'  onChange={event =>this._onChangeUser(event,'password')}
					value={this.state.userInfo.password}/>
			</div>
			<div className='form__submit-btn-wrapper'>
				<button className='form__submit-btn' type='submit'>
				  Login
				</button>
			</div>
		</form>
        )
    }
	_onLogin (event){
		event.preventDefault();
		event.stopPropagation();
		var formData = {
			username : this.state.userInfo.username,
			password : this.state.userInfo.password
		};
		this.callAjax(formData,this.changeState);
	}
	
	callAjax (formData,changeState){
		
			var errorMsg ='';
			const xhr = new XMLHttpRequest();
			xhr.open('post','http://localhost:8000/login',true);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.responseType = "json";
			xhr.send(JSON.stringify(formData));

			xhr.addEventListener('load', () => {
				if (xhr.status == 200) {
					errorMsg = '';
					changeState(errorMsg);
					window.location.href = "#/login/loginSuccess";
				} 
				else {
					const error = xhr.response.isError ? xhr.response.message : {};
					errorMsg = error;
					changeState(errorMsg);
				}
			});
	}
	changeState(errorMsg){
		const newState = Object.assign({}, this.state);
		newState.error = errorMsg;
		this.setState(newState);
	}

}

export default LoginComponent;