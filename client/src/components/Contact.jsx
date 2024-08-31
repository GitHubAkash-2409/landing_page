import { useState } from 'react';

const Contact = () => {
  const initialUserData = {
    name: '',
    email: '',
    message: ''
  };

  const [userData, setUserData] = useState(initialUserData);
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState({});

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newError = {};

    if (userData.name === '') {
      newError.name = 'Please Enter Name...';
    }

    if (userData.email === '') {
      newError.email = 'Please Enter Email Id...';
    } else if (userData.email.indexOf('@') <= 0) {
      newError.email = "'@' Invalid Position";
    } else if (
      userData.email.charAt(userData.email.length - 4) !== '.' &&
      userData.email.charAt(userData.email.length - 3) !== '.'
    ) {
      newError.email = "'.' Invalid Position";
    } else if (
      userData.email.slice(-4) !== '.com' &&
      userData.email.slice(-3) !== '.in'
    ) {
      newError.email = "Email must end with '.com' or '.in'";
    }

    if (userData.message === '') {
      newError.message = 'Please Enter a Message...';
    }

    if (Object.keys(newError).length === 0) {
      try {
        const response = await fetch('http://localhost:3001/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: 'recipient@example.com', // Replace with your recipient email
            subject: 'New Message from Contact Form',
            text: `Name: ${userData.name}\nEmail: ${userData.email}\nMessage: ${userData.message}`,
          }),
        });

        if (response.ok) {
          setSuccessMessage(`Message sent successfully!!`);
          setUserData(initialUserData);
          setTimeout(() => {
            setSuccessMessage('');
          }, 2000);
        } else {
          console.error('Failed to send email');
        }
      } catch (error) {
        console.error('Error sending email', error);
      }
    }

    setError(newError);
  };

  return (
    <div>
      {successMessage && (
        <div className='absolute inset-x-0 top-60 flex justify-center'>
          <h1 className='text-[green] bg-white p-4 rounded-md shadow-md'>
            {successMessage}
          </h1>
        </div>
      )}
      <section className='text-gray-600 body-font relative'>
        <div className='container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap'>
        <div className='lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative'>
            <iframe
              title='map'
              className='absolute inset-0 w-full h-full'
              src='https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed'
              style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
              frameBorder='0'
              scrolling='no'
              marginHeight='0'
              marginWidth='0'
            ></iframe>
            <div className='bg-white relative flex flex-wrap py-6 rounded shadow-md'>
              <div className='lg:w-1/2 px-6'>
                <h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs'>
                  ADDRESS
                </h2>
                <p className='mt-1'>
                  Photo booth tattooed prism, portland taiyaki hoodie neutra
                  typewriter
                </p>
              </div>
              <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
                <h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs'>
                  EMAIL
                </h2>
                <a
                  href='mailto:example@email.com'
                  className='text-indigo-500 leading-relaxed'
                >
                  example@email.com
                </a>
                <h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs mt-4'>
                  PHONE
                </h2>
                <p className='leading-relaxed'>123-456-7890</p>
              </div>
            </div>
          </div>
          <div className='lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0'>
            <h2 className='text-gray-900 text-lg mb-1 font-medium title-font'>
              Get a Free Quote
            </h2>
            <p className='leading-relaxed mb-5 text-gray-600'>
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <form onSubmit={handleSubmit}>
              <div className='relative mb-4'>
                <label
                  htmlFor='name'
                  className='leading-7 text-sm text-gray-600'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className={`w-full bg-white rounded-[10px] border ${
                    error.name ? 'border-red-500' : 'border-gray-300'
                  } focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out`}
                  onChange={handleChange}
                  value={userData.name}
                />
                {error.name && (
                  <span className='text-red-500'>{error.name}</span>
                )}
              </div>
              <div className='relative mb-4'>
                <label
                  htmlFor='email'
                  className='leading-7 text-sm text-gray-600'
                >
                  Email
                </label>
                <input
                  type='text'
                  id='email'
                  name='email'
                  className={`w-full bg-white rounded-[10px] border ${
                    error.email ? 'border-red-500' : 'border-gray-300'
                  } focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out`}
                  onChange={handleChange}
                  value={userData.email}
                />
                {error.email && (
                  <span className='text-red-500'>{error.email}</span>
                )}
              </div>
              <div className='relative mb-4'>
                <label
                  htmlFor='message'
                  className='leading-7 text-sm text-gray-600'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  className={`w-full bg-white rounded-[10px] border ${
                    error.message ? 'border-red-500' : 'border-gray-300'
                  } focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out`}
                  onChange={handleChange}
                  value={userData.message}
                ></textarea>
                {error.message && (
                  <span className='text-red-500'>{error.message}</span>
                )}
              </div>
              <button
                type='submit'
                className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
              >
                Submit
              </button>
            </form>
            <p className='text-xs text-gray-500 mt-3'>
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
