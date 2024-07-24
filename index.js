const descriptionContainer=document.querySelector('.about-options-description');
        const skillsOption=document.querySelector('.js-skill-option');
        const eduOption=document.querySelector('.js-education-option');
        const expOption=document.querySelector('.js-experiance-option');
        skillsOption.addEventListener('click',()=>{
            skillsOption.classList.add('selected');
            eduOption.classList.remove('selected');
            expOption.classList.remove('selected');

            descriptionContainer.innerHTML=`
             <div class="option-desciption-title">
                    Web Development
                </div>
                <div class="option-desciption-text">
                   Designing web interfaces
                </div>
                <div class="option-desciption-title">
                    App Development
                </div>
                <div class="option-desciption-text">
                   Designing Android/IOS applications
                </div>
                <div class="option-desciption-title">
                    PhotoShop
                </div>
                <div class="option-desciption-text">
                   Designs and photo editing
                </div>
            `;
        });
        eduOption.addEventListener('click',()=>{
            skillsOption.classList.remove('selected');
            eduOption.classList.add('selected');
            expOption.classList.remove('selected');

            descriptionContainer.innerHTML=`
              <div class="option-desciption-title">
                   Ain Shams University 
                </div>
                <div class="option-desciption-text">
                   Computer Engineering
                </div>
                <div class="option-desciption-title">
                    Qawmia Language School
                </div>
                <div class="option-desciption-text">
                   Secondary School
                </div>
              
            `;
        });
        expOption.addEventListener('click',()=>{
            skillsOption.classList.remove('selected');
            eduOption.classList.remove('selected');
            expOption.classList.add('selected');

            descriptionContainer.innerHTML=`
              <div class="option-desciption-title">
                    2024-Present
                </div>
                <div class="option-desciption-text">
                   NBE Internship
                </div>
                <div class="option-desciption-title">
                    2023-2024
                </div>
                <div class="option-desciption-text">
                  ITI
                </div>
                <div class="option-desciption-title">
                    2022-2023
                </div>
                <div class="option-desciption-text">
                   Course
                </div>
            `;
        });
const rightBarContainer=document.querySelector('.js-right-bar');
document.querySelector('.js-bars-menu').addEventListener('click',()=>{
rightBarContainer.style.bottom="-170px";
});
document.querySelector('.js-xmark').addEventListener('click',()=>{
  rightBarContainer.style.bottom="65px";
  });