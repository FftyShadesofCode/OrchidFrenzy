import React from 'react'

export default function EmailLogin() {
    return (
        <div className='flex flex-column items-center'>
            <h1>Login</h1>
            <form>
                <label>
                    <p>Email Address:</p>
                    <input type='text'/>
                </label>

                <label>
                    <p>Password:</p>
                    <input type='text' />
                </label>

                <div>
                    <button type='submit'>Submit</button>
                </div>

            </form>
        </div>
    );
};