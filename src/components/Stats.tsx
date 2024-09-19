import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from './Avatar';
import { changeStats } from '../store/statsSlice';
import { RootState, AppDispatch } from '../store';

const Stats: React.FC = () => {
const { followers, following } = useSelector((state: RootState) => state.stats);
const name = useSelector((state: RootState) => state.user.name);
const dispatch = useDispatch<AppDispatch>();

return (
    <div className='user-stats'>
        <div>
            <Avatar />
            {name}
        </div>
    <div className='stats'>
        <div
            onClick={() => dispatch(changeStats({ statsType: 'followers', sum: 1 }))}
            onContextMenu={(e) => {
            e.preventDefault();
            dispatch(changeStats({ statsType: 'followers', sum: -1 }));
        }}
        >
            Followers: {followers}
        </div>
        <div
            onClick={() => dispatch(changeStats({ statsType: 'following', sum: 1 }))}
            onContextMenu={(e) => {
            e.preventDefault();
            dispatch(changeStats({ statsType: 'following', sum: -1 }));
        }}
        >
            Following: {following}
        </div>
    </div>
    </div>
);
};

export default Stats;