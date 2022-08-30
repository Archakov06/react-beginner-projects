import React, {useEffect, useState} from 'react';
import './index.scss';
import {Success} from './components/Success';
import {Users} from './components/Users';


function App() {
    const [users, setUsers] = useState([]);
    const [invites, setInvites] = useState([]);
    const [success, setSuccess] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
    }

    const onClickInvite = (id) => {
        if (invites.includes(id)) {
            setInvites(prevState => prevState.filter((_id) => _id !== id))
        } else {
            setInvites(prevState => [...prevState, id])
        }
    }

    const fetchUsers = async () => {
        try {
            let response = await fetch('https://reqres.in/api/users');
            let json = await response.json();
            setUsers(json.data);
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchUsers();

    }, [])

    return (
        <div className="App">
            {success ? (<Success count={invites.length}/>) : (<Users users={users}
                                                                     isLoading={isLoading}
                                                                     searchValue={searchValue}
                                                                     invites={invites}
                                                                     onClickInvite={onClickInvite}
                                                                     handleSearch={handleSearch}
                                                                     setSuccess={setSuccess}
                                                                     count={invites.length}
            />)

            }
        </div>
    );
}

export default App;
