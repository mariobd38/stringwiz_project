import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import achievement from '../../assets/illustrations/signup/achievement.png';

import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { IconMail,IconUser,IconLock } from '@tabler/icons-react';

import { useFocusWithin } from '@mantine/hooks';
import {
    TextInput,
    PasswordInput,
    Text,
    Paper,
    Group,
    Button,
    Divider,
    Anchor,
    Stack,
    List, 
    rem,
    Progress
} from '@mantine/core';
import { useForm } from '@mantine/form';

import { GoogleButton } from './googleButton';
import { SlackButton } from './slackButton';
import { VerifyEmailRegex } from '../../utils/emailRegexFormat';
import { userExists } from '../../DataManagement/Users/userExists';
import { useAuth } from '../../AuthContext/authProvider';
import { useLocalStorage } from '@mantine/hooks';

const requirements = [
    { re: /[0-9]/ },
    { re: /[a-z]/},
    { re: /[A-Z]/ },
    { re: /[$&+,:;=?@#|'<>.^*()%!-]/ },
];
const validateFullName = (value) => {
    if (!value.trim()) {
        return 'Full name is required';
    }
    const words = value.trim().split(/\s+/);
    if (words.length < 2) {
        return 'Full name is required';
    }
    return null;
};

const validatePassword = (value) => {
    if (!value.trim()) {
        return 'Password is required';
    }
    if (value.length < 8) {
        return 'Password must be at least 8 characters';
    }
    return null;
};

function getStrength(password) {
    if (password) {
        let multiplier = password.length >= 8 ? 0 : 1;
  
        requirements.forEach((requirement) => {
            if (!requirement.re.test(password)) {
                multiplier += 1;
            }
        });
  
        return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 0);
    }
}
const SignupContent = (props) => {
    
    const { handleGoogleLogin,setInputEmail,showOAuth2Buttons,inputEmail,nextSteps } = props;

    const { setIsAuthenticated } = useAuth();
    const [userEmail, setUserEmail] = useLocalStorage({
        key: 'userEmail',
        defaultValue: '',
      });
    const [userFullName, setUserFullName] = useLocalStorage({
        key: 'userFullName',
        defaultValue: '',
      });

    const [invalidEmailErrorText, setInvalidEmailErrorText] = useState('');
    const navigate = useNavigate(); 

    const routeChange = (path) =>{ 
        navigate(path);
    }
    const handleEmailSignUp = async () => {
        let userExistsVar = false;
        if (inputEmail) {
            try {
                console.log(inputEmail);
                userExistsVar = await userExists(inputEmail);
            } catch (error) {
                console.error(error); 
            }
        }
        console.log(inputEmail);
        if (userExistsVar) {
            setInvalidEmailErrorText('A user with that email already exists.');
        } else if (inputEmail === '' || !VerifyEmailRegex(inputEmail)) {
            setInvalidEmailErrorText('Please enter a valid email address.');
        } else {
            setInvalidEmailErrorText('');
            navigate(`/app/signup?email=${inputEmail}`);
        }
    }

    const form = useForm({
        initialValues: {
            fullName: '',
            password: '',
        },

        validate: {
            fullName: validateFullName,
            password: validatePassword
        },
    });

    const [strength, setStrength] = useState(0);
    form.watch('password', ({ value }) => {
        const strengthValue = getStrength({ value }.value);
        setStrength(strengthValue);
    });

    const bars = Array(1)
        .fill(0)
        .map((_, index) => (
            <Progress
                styles={{ section: { transition: 'all 0.7s ease' } }}
                value={strength}
                color={strength > 80 ? 'teal' : strength > 60 ? 'blue' : strength > 40 ? 'yellow' : strength > 20 ? 'orange' : 'red'}
                key={index}
                size={6}
            />
    ));

    const { ref: fullNameRef, focused: isFullNameFocused } = useFocusWithin();
    const { ref: passwordRef, focused: isPasswordFocused } = useFocusWithin();

    const handleSignUpWithEmailRequest = async (values) => {
        const fullName = values.fullName
            .trim()
            .split(/\s+/)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        const password = values.password;
        const reqBody = {
            fullName: fullName,
            email: inputEmail,
            password: password,
        };
        try {
            const response = await fetch("/api/auth/signup", {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "post",
                body: JSON.stringify(reqBody),
            });

            if (response.status === 200) {
                setIsAuthenticated(true);
                console.log(inputEmail);
                console.log(fullName);
                setUserFullName(fullName);
                setUserEmail(inputEmail);
                navigate('/onboarding');
            } else {
                console.error("Unexpected error with user registration");
            }
            } catch (error) {
                console.error(error);
                console.error("Error with api call to register user");
        }
    }
    

    return (
        <div className='signup-content-wrapper d-flex flex-column-reverse flex-lg-row'>
            <div className='w-100 py-4' style={{background: "#fafafa"}}>

                <div className='mx-5 pt-4'>
                    <Text pb='20' fw={700} ta="center" style={{fontSize: "27px",color: "#272839", width: "80%", margin: "auto"}}>Trusted, intuitive interface made for productivity</Text>
                    <div className='mb-5 d-flex align-items-center'>
                        <List
                        spacing="sm"
                        className='m-auto'
                        icon={
                            <CheckCircleOutlineRoundedIcon style={{color: "#127bd6"}}/>
                        }
                        >
                            <List.Item fw={400} style={{fontSize: "15px"}}>Track and complete tasks </List.Item>
                            <List.Item fw={400} style={{fontSize: "15px"}}>Collaborate with your team </List.Item>
                            <List.Item fw={400} style={{fontSize: "15px"}}>Create documents</List.Item>
                            <List.Item fw={400} style={{fontSize: "15px"}}>Monitor timelines and milestones</List.Item>
                        </List>
                    </div>

                    <div className='col-12 d-flex justify-content-center'>

                        <img src={achievement} className="illustration" alt="Cocollabs" style={{width: "26rem"}}/>
                    </div>
                </div>
            </div>

            <div className='w-100' style={{borderRadius: "7px"}}>
                <Paper px="xl" pb="xl" className='py-4 signup-content-wrapper-paper'>
                    <div className='pt-4'>
                        <Text style={{fontSize: "35px"}} fw={600} ta="center" mb="xs">
                            Get started with Cocollabs
                        </Text>

                        <Text style={{fontSize: "15.5px", color: "#444648" }} fw={300} ta="center" mb="xl">
                            It&apos;s free! No credit card required.
                        </Text>

                        {/* <Text style={{fontSize: "15px"}} c='dimmed' fw={400} ta="center">
                            Plan. Manage. Collab.
                        </Text> */}

                        {showOAuth2Buttons &&
                        <>
                            <Group mt="lg" className='d-flex flex-column' w='100%'>
                                <GoogleButton size="md" onClick={handleGoogleLogin} radius="md" px="0" className='py-2 sign-up-oauth-button' style={{fontSize: "17px",background: "#fafafa"}}>
                                    Continue with Google
                                </GoogleButton>
                                <SlackButton size="md" radius="md" px="0" className='py-2 sign-up-oauth-button' style={{fontSize: "17px",background: "#fafafa"}}>Continue with Slack</SlackButton>
                            </Group>

                            <Divider label="OR" className='signup-content-wrapper-paper-divider' labelPosition="center" my="xl" />
                        </>}

                        {nextSteps ? 
                        <div className='d-flex flex-column align-items-center' style={{width: "100%"}}>
                            <form style={{width: "80%"}} className='signup-user-info-block' onSubmit={form.onSubmit((values) => handleSignUpWithEmailRequest(values))}>
                                <div className='d-flex justify-content-center mb-3'>
                                    <Button className='signup-user-info-block-email'  radius="xl" fw={800}>
                                        <IconMail style={{ width: rem(18), height: rem(18) }} stroke={2.5} className='me-2'/>{inputEmail}
                                    </Button>
                                </div>

                                <Stack className='d-flex align-items-center'>
                                    <div ref={fullNameRef} className='w-100'>
                                        <TextInput
                                            label="Full name"
                                            placeholder={isFullNameFocused ? '' : 'John Doe'}
                                            type="text"
                                            autoComplete='off'
                                            leftSection={<IconUser style={{ width: rem(18), height: rem(18) }} stroke={2.5}/>}
                                            className='w-100 signup-user-input-field'
                                            // value={fullName}
                                            // onFocus={() => setIsFullNameFocused(true)}
                                            // onBlur={() => setIsFullNameFocused(false)}
                                            // onChange={(e) => setFullName(e.target.value)}
                                            size="lg"
                                            radius="md"
                                            key={form.key('fullName')}
                                            {...form.getInputProps('fullName')}
                                        />
                                    </div>

                                    <div ref={passwordRef} className='w-100'>
                                        <PasswordInput
                                            label="Password"
                                            placeholder={isPasswordFocused ? '' : 'Minimum 8 characters'}
                                            type="password"
                                            autoComplete='off'
                                            leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={2.5}/>}
                                            className='w-100 signup-user-input-field'
                                            // value={password}
                                            // onFocus={() => setIsPasswordFocused(true)}
                                            // onBlur={() => setIsPasswordFocused(false)}
                                            // onChange={(e) => setPassword(e.target.value)}
                                            size="lg"
                                            radius="md"
                                            key={form.key('password')}
                                            {...form.getInputProps('password')}
                                        />
                                    </div>
                                </Stack>
                                
                                {form.values.password && form.values.password.length > 0 &&
                                    <Text c='#858789' fw={400} align='center' mt={5} ff='Lato, sans-serif'>
                                        Strength: {strength > 80 ? 'Excellent!' : strength > 60 ? 'Good' : strength > 40 ? 'Fair' : strength > 20 ? 'Needs work' : 'Low'}
                                </Text>}

                                <Group grow mt="sm" mb="md" px='1'>
                                    {bars}
                                </Group>

                                <Group mt="xl" mb="lg">
                                    
                                    <Button type="submit" radius="md" px="18" py="3" fw={700} w="100%" fz="15" onClick={handleEmailSignUp}>
                                        Sign Up
                                    </Button>
                                </Group>

                            </form>
                        </div>
                        :
                        <div className='signup-content-email-block'>
                            <div style={{width: "100%", height: "55px"}}>
                                <Stack className='d-flex align-items-center'>
                                    <TextInput
                                        label="Enter your email"
                                        type="text"
                                        placeholder=""
                                        leftSection={<IconMail style={{ width: rem(18), height: rem(18) }} stroke={2.5}/>}
                                        autoComplete='off'
                                        value={inputEmail}
                                        onChange={(e) => setInputEmail(e.target.value)}
                                        radius="md"
                                        className='w-100 signup-user-input-field'
                                        size="lg"
                                    />
                                </Stack>
                                {
                                    invalidEmailErrorText.length > 0 && 
                                    <Text style={{fontSize: "14.5px", color: "#dc2a2a" }} fw={400} ta='center'>
                                        {invalidEmailErrorText}
                                    </Text>
                                }
                            </div>
                            

                            <Group mt="xl" className='d-flex justify-content-between py-4'>
                                <Anchor component="button" type="button" c="dimmed" size="sm" onClick={() => routeChange('/login')} >
                                    Already have an account? Login
                                </Anchor>
                                
                                <Button type="submit" radius="md" px="18" py="3" fw={700} style={{fontSize: "15px"}} onClick={handleEmailSignUp}>
                                    Sign Up
                                </Button>
                            </Group>
                        </div>
                        }

                        
                    </div>
                </Paper>
            </div>
        </div>
    );
};

export default SignupContent;