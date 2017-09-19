import React from 'react';

class RegComponent extends React.Component {
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

		this._onRegister = this._onRegister.bind(this);
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
            <form className='form' onSubmit={event=>this._onRegister(event)}>
			<h3> Register </h3>
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
					placeholder='••••••••••' onChange={event=>this._onChangeUser(event,'password')}
					value={this.state.userInfo.password} />
			</div>
			<div className='form__submit-btn-wrapper'>
				<button className='form__submit-btn' type='submit'>
				  Register
				</button>
			</div>
		</form>
        )
    }
	_onRegister(event){
		var formData = {
			username : this.state.userInfo.username,
			password : this.state.userInfo.password
		};
		this.callAjax(formData,this.changeState);
		event.preventDefault();
		event.stopPropagation();
	}
	callAjax (formData,changeState){
		
			var errorMsg ='';
			const xhr = new XMLHttpRequest();
			xhr.open('post','http://localhost:8000/register',true);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.responseType = "json";
			xhr.send(JSON.stringify(formData));

			xhr.addEventListener('load', () => {
				if (xhr.status == 200) {
					errorMsg = '';
          changeState(errorMsg);
          window.location.href = "#/register/regSuccess";
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

export default RegComponent;