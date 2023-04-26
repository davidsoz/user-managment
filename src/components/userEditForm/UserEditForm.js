import React from 'react';
import { Wrapper , UserInfo, Container, Details, Permission } from "./styled";
import Avatar from '../avatar/Avatar';
import Button from '../button/Button';
import statusOn from "../../icons/svg/statusOn.svg";
import statusOff from "../../icons/svg/statusOff.svg";
import Input from '../input/Input';
import arrow from "../../icons/svg/arrow.svg";

export default function UserEditForm({user, onClose}) {
	return (
		<Wrapper>
			<Container>
				<UserInfo>
					<div>
						<Avatar/>
						<span>upload a photo</span>
					</div>
					<p>Danniel Blichman</p>
					<a href='@'>danniel.blichman@testtask.com</a>
					<Button>Resend the invite</Button>
				</UserInfo>
				<Details>
					<h2>Details</h2>
					<div className='list'>
						<img src={user ? statusOn : statusOff} alt="status" />
						<p>
							The user is <span>Active</span>
						</p>
						<div className='input-container'>
							<div>
								<Input inputValue="Danniel" label title="* First Name"/>
							</div>
							<div>
								<Input inputValue="Blichman" label title="* Last Name"/>
							</div>
							<div>
								<Input inputValue="Admin" label title="* Role"/>
							</div>
						</div>
					</div>
					<div onClick={onClose}>
					<Button type='secondary'>Save Changes</Button>
					</div>
				</Details>
				<Permission>
					<div className='flex-between'>
						<h2>
							Permission
						</h2>
						<span>Admin</span>
					</div>
					<div className='flex-between mt-50'>
						<h3>Super Admin</h3>
						<img src={user ? statusOn : statusOff} alt="status" />
					</div>
					<hr></hr>
					<div>
						<div className='group flex-between'>
							<img className='arrow' src={arrow} alt='Arrow' />
							<p>Permission group 1</p>
							<img src={user ? statusOn : statusOff} alt="status" />
						</div>
						<ul>
							<li className='flex-between'>
								<div className='flex-between'><span className='dot'></span><span>Permission 11</span></div>
								<img src={user ? statusOn : statusOff} alt="status" />
							</li>
							<li className='flex-between'>
								<div className='flex-between'><span className='dot'></span><span>Permission 11</span></div>
								<img src={user ? statusOn : statusOff} alt="status" />
							</li>
							<li className='flex-between'>
								<div className='flex-between'><span className='dot'></span><span>Permission 11</span></div>
								<img src={user ? statusOn : statusOff} alt="status" />
							</li>
							<li className='flex-between'>
								<div className='flex-between'><span className='dot'></span><span>Permission 11</span></div>
								<img src={user ? statusOn : statusOff} alt="status" />
							</li>
							<li className='flex-between'>
								<div className='flex-between'><span className='dot'></span><span>Permission 11</span></div>
								<img src={user ? statusOn : statusOff} alt="status" />
							</li>
						</ul>
						<hr></hr>
						<div className='group flex-between'>
							<img className='arrow' src={arrow} alt='Arrow' />
							<p>Permission group 2</p>
							<img src={user ? statusOn : statusOff} alt="status" />
						</div>
						<hr></hr>
						<div className='group flex-between'>
							<img className='arrow' src={arrow} alt='Arrow' />
							<p>Permission group 3</p>
							<img src={user ? statusOn : statusOff} alt="status" />
						</div>
					</div>
				</Permission>
			</Container>
		</Wrapper>
	)
}
