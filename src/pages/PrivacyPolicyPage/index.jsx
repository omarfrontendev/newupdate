import React, { useState, useEffect } from "react";
import styles from "./.module.scss";
import { Helmet } from "react-helmet";
import LoadWrapper from "../../components/LoadWrapper";

export default function PrivacyPolicyPage() {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadWrapper />
      ) : (
        <>
          <div className={`${styles.privacy} pb-5`}>
            <Helmet>
              <title>Pick • a | Privacy policy</title>
            </Helmet>
            <h2 className={styles.privacy__main__title}>Privacy policy</h2>
            <a
              class="wpembed-inline"
              href="https://app.websitepolicies.com/policies/view/gz4nisna"
            >
              Privacy policy
            </a>
            <script
              src="https://cdn.websitepolicies.io/lib/embed/embed.min.js"
              defer
            ></script>
            <h3 className={styles.privacy__title}>Privacy policy</h3>
            <p>
              We respect your privacy and are committed to protecting it through
              our compliance with this privacy policy (“Policy”). This Policy
              describes the types of information we may collect from you or that
              you may provide (“Personal Information”) on the{" "}
              <a
                href="https://www.pick-a.net/"
                target="_blank"
                rel="noreferrer"
              >
                pick-a.net
              </a>{" "}
              website (“Website”), “Pick A” mobile application (“Mobile
              Application”), and any of their related products and services
              (collectively, “Services”), and our practices for collecting,
              using, maintaining, protecting, and disclosing that Personal
              Information. It also describes the choices available to you
              regarding our use of your Personal Information and how you can
              access and update it. This Policy is a legally binding agreement
              between you (“User”, “you” or “your”) and Pick A Delivery Service
              L.L.C (“Pick A Delivery Service L.L.C”, “we”, “us” or “our”). If
              you are entering into this agreement on behalf of a business or
              other legal entity, you represent that you have the authority to
              bind such entity to this agreement, in which case the terms
              “User”, “you” or “your” shall refer to such entity. If you do not
              have such authority, or if you do not agree with the terms of this
              agreement, you must not accept this agreement and may not access
              and use the Services. By accessing and using the Services, you
              acknowledge that you have read, understood, and agree to be bound
              by the terms of this Policy. This Policy does not apply to the
              practices of companies that we do not own or control, or to
              individuals that we do not employ or manage.
            </p>
            <h3 className={styles.privacy__title}>
              Automatic collection of information
            </h3>
            <p>
              When you open the Website or use the Mobile Application, our
              servers automatically record information that your browser or
              device sends. This data may include information such as your
              device’s IP address and location, browser and device name and
              version, operating system type and version, language preferences,
              the webpage you were visiting before you came to the Services,
              pages of the Services that you visit, the time spent on those
              pages, the information you search for on the Services, access
              times and dates, and other statistics.
            </p>
            <p>
              Information collected automatically is used only to identify
              potential cases of abuse and establish statistical information
              regarding the usage and traffic of the Services. This statistical
              information is not otherwise aggregated in such a way that would
              identify any particular User of the system.
            </p>
            <h3 className={styles.privacy__title}>
              Collection of personal information
            </h3>
            <p>
              You can access and use the Services without telling us who you are
              or revealing any information by which someone could identify you
              as a specific, identifiable individual. If, however, you wish to
              use some of the features offered on the Services, you may be asked
              to provide certain Personal Information (for example, your name
              and e-mail address).
            </p>
            <p>
              We receive and store any information you knowingly provide to us
              when you create an account, make a purchase, or fill any forms on
              the Services. When required, this information may include the
              following:
            </p>
            <ul>
              <li>
                • Account details (such as user name, unique user ID, password,
                etc)
              </li>
              <li>
                • Contact information (such as email address, phone number, etc)
              </li>
              <li>
                • Basic personal information (such as name, country of
                residence, etc)
              </li>
              <li>
                • Sensitive personal information (such as ethnicity, religious
                beliefs, mental health, etc)
              </li>
              <li>
                • Payment information (such as credit card details, bank
                details, etc)
              </li>
              <li>
                • Geolocation data of your device (such as latitude and
                longitude)
              </li>
              <li>
                • Any other materials you willingly submit to us (such as
                articles, images, feedback, etc) Some of the information we
                collect is directly from you via the Services. However, we may
                also collect Personal Information about you from other sources
                such as public databases, social media platforms, third-party
                data providers, and our joint marketing partners. Personal
                Information we collect from other sources may include
                demographic information, such as age and gender, device
                information, such as IP addresses, location, such as city and
                state, and online behavioural data, such as information about
                your use of social media websites, page view information and
                search results and links.
              </li>
            </ul>
            <p>
              You can choose not to provide us with your Personal Information,
              but then you may not be able to take advantage of some of the
              features on the Services. Users who are uncertain about what
              information is mandatory are welcome to contact us.
            </p>
            <h3 className={styles.privacy__title}>Privacy of children</h3>
            <p>
              We do not knowingly collect any Personal Information from children
              under the age of 18. If you are under the age of 18, please do not
              submit any Personal Information through the Services. If you have
              reason to believe that a child under the age of 18 has provided
              Personal Information to us through the Services, please contact us
              to request that we delete that child’s Personal Information from
              our Services.
            </p>
            <p>
              We encourage parents and legal guardians to monitor their
              children’s Internet usage and to help enforce this Policy by
              instructing their children never to provide Personal Information
              through the Services without their permission. We also ask that
              all parents and legal guardians overseeing the care of children
              take the necessary precautions to ensure that their children are
              instructed to never give out Personal Information when online
              without their permission.
            </p>
            <h3 className={styles.privacy__title}>
              Use and processing of collected information
            </h3>
            <p>
              We act as a data controller and a data processor when handling
              Personal Information, unless we have entered into a data
              processing agreement with you in which case you would be the data
              controller and we would be the data processor.
            </p>
            <p>
              Our role may also differ depending on the specific situation
              involving Personal Information. We act in the capacity of a data
              controller when we ask you to submit your Personal Information
              that is necessary to ensure your access and use of the Services.
              In such instances, we are a data controller because we determine
              the purposes and means of the processing of Personal Information.
            </p>
            <p>
              We act in the capacity of a data processor in situations when you
              submit Personal Information through the Services. We do not own,
              control, or make decisions about the submitted Personal
              Information, and such Personal Information is processed only in
              accordance with your instructions. In such instances, the User
              providing Personal Information acts as a data controller.
            </p>
            <p>
              In order to make the Services available to you, or to meet a legal
              obligation, we may need to collect and use certain Personal
              Information. If you do not provide the information that we
              request, we may not be able to provide you with the requested
              products or services. Any of the information we collect from you
              may be used for the following purposes:
            </p>
            <ul>
              <li>• Create and manage user accounts</li>
              <li>• Fulfill and manage orders</li>
              <li>• Deliver products or services</li>
              <li>• Improve products and services</li>
              <li>• Send administrative information</li>
              <li>• Send marketing and promotional communications</li>
              <li>• Send product and service updates</li>
              <li>• Respond to inquiries and offer support</li>
              <li>• Request user feedback</li>
              <li>• Improve user experience</li>
              <li>• Post customer testimonials</li>
              <li>• Deliver targeted advertising</li>
              <li>• Administer prize draws and competitions</li>
              <li>• Enforce terms and conditions and policies</li>
              <li>• Protect from abuse and malicious users</li>
              <li>• Respond to legal requests and prevent harm</li>
              <li>• Run and operate the Services</li>
            </ul>
            <p>
              Processing your Personal Information depends on how you interact
              with the Services, where you are located in the world and if one
              of the following applies: (i) you have given your consent for one
              or more specific purposes; (ii) provision of information is
              necessary for the performance of an agreement with you and/or for
              any pre-contractual obligations thereof; (iii) processing is
              necessary for compliance with a legal obligation to which you are
              subject; (iv) processing is related to a task that is carried out
              in the public interest or in the exercise of official authority
              vested in us; (v) processing is necessary for the purposes of the
              legitimate interests pursued by us or by a third party. We may
              also combine or aggregate some of your Personal Information in
              order to better serve you and to improve and update our Services
            </p>
            <p>
              Note that under some legislations we may be allowed to process
              information until you object to such processing by opting out,
              without having to rely on consent or any other of the legal bases.
              In any case, we will be happy to clarify the specific legal basis
              that applies to the processing, and in particular whether the
              provision of Personal Information is a statutory or contractual
              requirement, or a requirement necessary to enter into a contract.
            </p>
            <h3 className={styles.privacy__title}>Payment processing</h3>
            <p>
              In case of Services requiring payment, you may need to provide
              your credit card details or other payment account information,
              which will be used solely for processing payments. We use
              third-party payment processors (“Payment Processors”) to assist us
              in processing your payment information securely.
            </p>
            <p>
              Payment Processors adhere to the latest security standards as
              managed by the PCI Security Standards Council, which is a joint
              effort of brands like Visa, MasterCard, American Express and
              Discover. Sensitive and private data exchange happens over a SSL
              secured communication channel and is encrypted and protected with
              digital signatures, and the Services are also in compliance with
              strict vulnerability standards in order to create as secure of an
              environment as possible for Users. We will share payment data with
              the Payment Processors only to the extent necessary for the
              purposes of processing your payments, refunding such payments, and
              dealing with complaints and queries related to such payments and
              refunds.
            </p>
            <p>
              Please note that the Payment Processors may collect some Personal
              Information from you, which allows them to process your payments
              (e.g., your email address, address, credit card details, and bank
              account number) and handle all the steps in the payment process
              through their systems, including data collection and data
              processing. Where necessary for processing future or recurring
              payments and subject to your prior consent, your financial
              information will be stored in encrypted form on secure servers of
              our Payment Processors. The Payment Processors’ use of your
              Personal Information is governed by their respective privacy
              policies which may or may not contain privacy protections as
              protective as this Policy. We suggest that you review their
              respective privacy policies.
            </p>
            <h3 className={styles.privacy__title}>Managing information</h3>
            <p>
              You are able to delete certain Personal Information we have about
              you. The Personal Information you can delete may change as the
              Services change. When you delete Personal Information, however, we
              may maintain a copy of the unrevised Personal Information in our
              records for the duration necessary to comply with our obligations
              to our affiliates and partners, and for the purposes described
              below. If you would like to delete your Personal Information or
              permanently delete your account, you can do so on the settings
              page of your account on the Services or simply by contacting us.
            </p>
            <h3 className={styles.privacy__title}>Disclosure of information</h3>
            <p>
              Depending on the requested Services or as necessary to complete
              any transaction or provide any Service you have requested, we may
              share your information with our affiliates, contracted companies,
              and service providers (collectively, “Service Providers”) we rely
              upon to assist in the operation of the Services available to you
              and whose privacy policies are consistent with ours or who agree
              to abide by our policies with respect to Personal Information. We
              will not share any information with unaffiliated third parties.
            </p>
            <p>
              Service Providers are not authorized to use or disclose your
              information except as necessary to perform services on our behalf
              or comply with legal requirements. Service Providers are given the
              information they need only in order to perform their designated
              functions, and we do not authorize them to use or disclose any of
              the provided information for their own marketing or other
              purposes. We will share and disclose your information only with
              the following categories of Service Providers:
            </p>
            <ul>
              <li>• Advertising networks</li>
              <li>• Affiliate programs</li>
              <li>• Cloud computing services</li>
              <li>• Communication and collaboration services</li>
              <li>• Data analytics services</li>
              <li>• Data storage services</li>
              <li>• Financial services</li>
              <li>• Order fulfillment services</li>
              <li>• Payment processors</li>
              <li>• Performance monitoring services</li>
              <li>• Product engineering and design services</li>
              <li>• Sales and marketing services</li>
              <li>• Social networks</li>
              <li>• User authentication services</li>
              <li>• Website hosting service providers</li>
            </ul>
            <p>
              We may also disclose any Personal Information we collect, use or
              receive if required or permitted by law, such as to comply with a
              subpoena or similar legal process, and when we believe in good
              faith that disclosure is necessary to protect our rights, protect
              your safety or the safety of others, investigate fraud, or respond
              to a government request.
            </p>
            <p>
              In the event we go through a business transition, such as a merger
              or acquisition by another company, or sale of all or a portion of
              its assets, your user account, and your Personal Information will
              likely be among the assets transferred.
            </p>
            <h3 className={styles.privacy__title}>Retention of information</h3>
            <p>
              We will retain and use your Personal Information for the period
              necessary to comply with our legal obligations, as long as your
              user account remains active, to enforce our agreements, resolve
              disputes, and unless a longer retention period is required or
              permitted by law.
            </p>
            <p>
              We may use any aggregated data derived from or incorporating your
              Personal Information after you update or delete it, but not in a
              manner that would identify you personally. Once the retention
              period expires, Personal Information shall be deleted. Therefore,
              the right to access, the right to erasure, the right to
              rectification, and the right to data portability cannot be
              enforced after the expiration of the retention period.
            </p>
            <h3 className={styles.privacy__title}>Cookies</h3>
            <p>
              Our Services use “cookies” to help personalize your online
              experience. A cookie is a text file that is placed on your hard
              disk by a web page server. Cookies cannot be used to run programs
              or deliver viruses to your computer. Cookies are uniquely assigned
              to you, and can only be read by a web server in the domain that
              issued the cookie to you. If you choose to decline cookies, you
              may not be able to fully experience the features of the Services.
              You may learn more about cookies and how they work{" "}
              <a
                href="https://www.websitepolicies.com/blog/sample-cookie-policy-template"
                target="_blank"
                rel="noreferrer"
              >
                here.
              </a>
            </p>
            <p>
              We may use cookies to collect, store, and track information for
              security and personalization, to operate the Services, and for
              statistical purposes. Please note that you have the ability to
              accept or decline cookies. Most web browsers automatically accept
              cookies by default, but you can modify your browser settings to
              decline cookies if you prefer.
            </p>
            <h3 className={styles.privacy__title}>Data analytics</h3>
            <p>
              Our Services may use third-party analytics tools that use cookies,
              web beacons, or other similar information-gathering technologies
              to collect standard internet activity and usage information. The
              information gathered is used to compile statistical reports on
              User activity such as how often Users visit our Services, what
              pages they visit and for how long, etc. We use the information
              obtained from these analytics tools to monitor the performance and
              improve our Services.
            </p>
            <h3 className={styles.privacy__title}>Do Not Track signals</h3>
            <p>
              Some browsers incorporate a Do Not Track feature that signals to
              websites you visit that you do not want to have your online
              activity tracked. Tracking is not the same as using or collecting
              information in connection with a website. For these purposes,
              tracking refers to collecting personally identifiable information
              from consumers who use or visit a website or online service as
              they move across different websites over time. How browsers
              communicate the Do Not Track signal is not yet uniform. As a
              result, the Services are not yet set up to interpret or respond to
              Do Not Track signals communicated by your browser. Even so, as
              described in more detail throughout this Policy, we limit our use
              and collection of your Personal Information.
            </p>
            <h3 className={styles.privacy__title}>Advertisements</h3>
            <p>
              We may display online advertisements and we may share aggregated
              and non-identifying information about our customers that we or our
              advertisers collect through your use of the Services. We do not
              share personally identifiable information about individual
              customers with advertisers. In some instances, we may use this
              aggregated and non-identifying information to deliver tailored
              advertisements to the intended audience.
            </p>
            <p>
              We may also permit certain third-party companies to help us tailor
              advertising that we think may be of interest to Users and to
              collect and use other data about User activities on the Services.
              These companies may deliver ads that might place cookies and
              otherwise track User behavior.
            </p>
            <h3 className={styles.privacy__title}>Social media features</h3>
            <p>
              Our Services may include social media features, such as the
              Facebook and Twitter buttons, Share This buttons, etc
              (collectively, “Social Media Features”). These Social Media
              Features may collect your IP address, what page you are visiting
              on our Services, and may set a cookie to enable Social Media
              Features to function properly. Social Media Features are hosted
              either by their respective providers or directly on our Services.
              Your interactions with these Social Media Features are governed by
              the privacy policy of their respective providers.
            </p>
            <h3 className={styles.privacy__title}>Email marketing</h3>
            <p>
              We offer electronic newsletters to which you may voluntarily
              subscribe at any time. We are committed to keeping your e-mail
              address confidential and will not disclose your email address to
              any third parties except as allowed in the information use and
              processing section or for the purposes of utilizing a third-party
              provider to send such emails. We will maintain the information
              sent via e-mail in accordance with applicable laws and
              regulations.
            </p>
            <p>
              In compliance with the CAN-SPAM Act, all e-mails sent from us will
              clearly state who the e-mail is from and provide clear information
              on how to contact the sender. You may choose to stop receiving our
              newsletter or marketing emails by following the unsubscribe
              instructions included in these emails or by contacting us.
              However, you will continue to receive essential transactional
              emails.
            </p>
            <h3 className={styles.privacy__title}>Push notifications</h3>
            <p>
              We offer push notifications to which you may also voluntarily
              subscribe at any time. To make sure push notifications reach the
              correct devices, we use a third-party push notifications provider
              who relies on a device token unique to your device which is issued
              by the operating system of your device. While it is possible to
              access a list of device tokens, they will not reveal your
              identity, your unique device ID, or your contact information to us
              or our third-party push notifications provider. We will maintain
              the information sent via e-mail in accordance with applicable laws
              and regulations. If, at any time, you wish to stop receiving push
              notifications, simply adjust your device settings accordingly.
            </p>
            <h3 className={styles.privacy__title}>Affiliate links</h3>
            <p>
              We may engage in affiliate marketing and have affiliate links
              present on the Services for the purpose of being able to offer you
              related or additional products and services. If you click on an
              affiliate link, a cookie will be placed on your browser to track
              any sales for purposes of commissions.
            </p>
            <h3 className={styles.privacy__title}>Links to other resources</h3>
            <p>
              The Services contain links to other resources that are not owned
              or controlled by us. Please be aware that we are not responsible
              for the privacy practices of such other resources or third
              parties. We encourage you to be aware when you leave the Services
              and to read the privacy statements of each and every resource that
              may collect Personal Information.
            </p>
            <h3 className={styles.privacy__title}>Information security</h3>
            <p>
              We secure information you provide on computer servers in a
              controlled, secure environment, protected from unauthorized
              access, use, or disclosure. We maintain reasonable administrative,
              technical, and physical safeguards in an effort to protect against
              unauthorized access, use, modification, and disclosure of Personal
              Information in our control and custody. However, no data
              transmission over the Internet or wireless network can be
              guaranteed.
            </p>
            <p>
              Therefore, while we strive to protect your Personal Information,
              you acknowledge that (i) there are security and privacy
              limitations of the Internet which are beyond our control; (ii) the
              security, integrity, and privacy of any and all information and
              data exchanged between you and the Services cannot be guaranteed;
              and (iii) any such information and data may be viewed or tampered
              with in transit by a third party, despite best efforts.
            </p>
            <p>
              As the security of Personal Information depends in part on the
              security of the device you use to communicate with us and the
              security you use to protect your credentials, please take
              appropriate measures to protect this information.
            </p>
            <h3 className={styles.privacy__title}>Data breach</h3>
            <p>
              In the event we become aware that the security of the Services has
              been compromised or Users’ Personal Information has been disclosed
              to unrelated third parties as a result of external activity,
              including, but not limited to, security attacks or fraud, we
              reserve the right to take reasonably appropriate measures,
              including, but not limited to, investigation and reporting, as
              well as notification to and cooperation with law enforcement
              authorities. In the event of a data breach, we will make
              reasonable efforts to notify affected individuals if we believe
              that there is a reasonable risk of harm to the User as a result of
              the breach or if notice is otherwise required by law. When we do,
              we will post a notice on the Services, send you an email, get in
              touch with you over the phone, mail you a letter.
            </p>
            <h3 className={styles.privacy__title}>Changes and amendments</h3>
            <p>
              We reserve the right to modify this Policy or its terms related to
              the Services at any time at our discretion. When we do, we will
              revise the updated date at the bottom of this page. We may also
              provide notice to you in other ways at our discretion, such as
              through the contact information you have provided.
            </p>
            <p>
              An updated version of this Policy will be effective immediately
              upon the posting of the revised Policy unless otherwise specified.
              Your continued use of the Services after the effective date of the
              revised Policy (or such other act specified at that time) will
              constitute your consent to those changes. However, we will not,
              without your consent, use your Personal Information in a manner
              materially different than what was stated at the time your
              Personal Information was collected.
            </p>
            <h3 className={styles.privacy__title}>Acceptance of this policy</h3>
            <p>
              You acknowledge that you have read this Policy and agree to all
              its terms and conditions. By accessing and using the Services and
              submitting your information you agree to be bound by this Policy.
              If you do not agree to abide by the terms of this Policy, you are
              not authorized to access or use the Services.
            </p>
            <h3 className={styles.privacy__title}>Contacting us</h3>
            <p>
              If you have any questions regarding the information we may hold
              about you or if you wish to exercise your rights, you may use the
              following data subject request form to submit your request:
            </p>
            <p>
              <a
                href="https://app.websitepolicies.com/dsar/view/6ak6v4jr"
                target="_blank"
                rel="noreferrer"
              >
                Submit a data access request
              </a>
              <br />
              If you have any other questions, concerns, or complaints regarding
              this Policy, we encourage you to contact us using the details
              below:
            </p>
            <p>
              <a href="mailto:info@pick-a.net" target="_blank" rel="noreferrer">
                info@pick-a.net
              </a>
              <br />
              1906 Latifa Tower World Trade 1 Sheik Zayed Road, Dubai United
              Arab Emirates Data protection officer: John john@pick-a.net
            </p>
            <p>
              We will attempt to resolve complaints and disputes and make every
              reasonable effort to honor your wish to exercise your rights as
              quickly as possible and in any event, within the timescales
              provided by applicable data protection laws.
            </p>
            This document was last updated on June 16, 2022
          </div>
        </>
      )}
    </>
  );
}
