import React, { useRef } from 'react';
import { ScrollView } from 'react-native';
import { NavigationInterface } from '../types';
import OTPVerification from './otpVerification';
import PhoneVerification from './phoneVerificationn';

// import { Container } from './styles';
// import Phoneverify from './phoneVerification';
// import VerifyDetails from '../../libs/getPhoneverify.json';

// interface SignupScreenProp extends NavigationInterface {
//   testID?: string;
// }

export default {
  PhoneVerification,
  OTPVerification
};

// export default function SignupScreen(props: SignupScreenProp) {
//   const scrollRef = useRef<ScrollView>(null);

//   return (
//     <Container>
//       <ScrollView
//         horizontal={true}
//         showsHorizontalScrollIndicator={false}
//         pagingEnabled={true}
//         ref={scrollRef}
//       >
//         {VerifyDetails.map((item, ind) => (
//           <Phoneverify
//             key={ind}
//             index={ind}
//             scroll={scrollRef}
//             buttonText={item.buttonText}
//             context={item.context}
//             header="VERIFY YOUR IDENTITY"
//             subtitle={item.subtitle}
//           />
//         ))}
//       </ScrollView>
//     </Container>
//   );
// }
