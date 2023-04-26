import React from 'react';
import { AvatarWrapper } from './styled';
import avatar from "../../icons/svg/avatarOn.svg"

export default function Avatar({ isActive, width="194", height="194" }) {
	return (
		<AvatarWrapper width={width} height={height}>
			<img src={avatar} alt='avatar'/>
		</AvatarWrapper>
	)
}
