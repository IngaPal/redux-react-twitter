import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeAvatar, changeName } from '../store/userSlice';
import { RootState, AppDispatch } from '../store';

interface AvatarProps {
    size?: 'small';
}

const Avatar: React.FC<AvatarProps> = ({ size }) => {
    const { name, avatar } = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch<AppDispatch>();
return (
    <img
        onClick={() => {
        const url = prompt('Enter new avatar url');
        if (url) dispatch(changeAvatar(url));
    }}
        onContextMenu={e => {
        e.preventDefault();
        const newName = prompt('Enter new name');
        if (newName) dispatch(changeName(newName));
    }}
        className={`user-avatar ${size ?? ''}`}
        src={avatar}
        alt={name}
        />
    );
};

export default Avatar;