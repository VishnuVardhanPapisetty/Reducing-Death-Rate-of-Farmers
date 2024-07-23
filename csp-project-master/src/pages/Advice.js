import React from 'react';
import Financial from "../assets/Financialsupport.jpg";
import agrireforms from "../assets/agrireforms.jpg";
import mentalhealth from "../assets/mentalhealth.jpg";
import "../styles/Advice.css";
import BaseHOC from "../layouts/BaseHOC";
function Advice() {
return (
    <div class="advice">
<div class="sec">
    <div class="sec-text">
        <h1>Financial Support and Debt Relief</h1>
        <p>
        Providing farmers with fair prices for their produce, access to credit, and insurance against crop failures can alleviate 
        their financial burdens. 
        Government subsidies, loan waivers, and microfinance initiatives can also help reduce debt-related stress.
        Governments can provide subsidies for inputs like seeds, fertilizers, and irrigation equipment. 
        These subsidies can help reduce the cost of farming and improve yields, thus easing the financial burden on farmers.
        Facilitating easy access to credit is essential for farmers, especially during times of need. Setting up rural credit institutions, 
        providing low-interest loans, and simplifying loan application processes can help farmers manage their financial needs.
             </p>
    </div>
    <img src={Financial} alt="financial"/>
    </div>
    <div class="sec">
        <div class="sec-text">
            <h1>Agriculture Reforms</h1>
            <p>Encouraging farmers to diversify their crops can reduce risks associated with relying on a single crop. 
                This strategy involves cultivating a variety of crops with different growth cycles and market demands,
                 which can help manage risks related to market fluctuations and climate variability.
                 Promoting sustainable agricultural practices, such as conservation tillage, agroforestry, cover cropping, 
                 and organic farming, can improve soil health, water conservation, and reduce the negative environmental impacts of farming.
                 Introducing efficient irrigation methods like drip irrigation and sprinkler systems can help conserve water resources 
                 and improve crop yields by ensuring precise water delivery to plants.
                 Research and adoption of high-yield and drought-resistant crop varieties can enhance productivity, 
                 particularly in regions prone to erratic rainfall or water scarcity.</p>
        </div>
        <img src={agrireforms} alt="agrireforms"/>
    </div>
    <div class="sec">
        <div class="sec-text">
            <h1>Mental Health Awareness</h1>
            <p> Conducting awareness campaigns through various mediums such as workshops, seminars, community meetings, radio, TV, 
                and social media can help disseminate information about mental health, common mental health issues, and available resources.
                Efforts should focus on challenging the stigma and misconceptions associated with mental health. Sharing stories of individuals 
                who have overcome mental health challenges can help normalize the conversation.
                Providing training to community leaders, teachers, healthcare workers, and agricultural extension officers to recognize
                 signs of distress and offer basic support can be instrumental in early intervention.</p>
    </div>
    <img src={mentalhealth} alt="mentalhealth"/>
    </div>
    </div>

)
}

export default BaseHOC(Advice);
