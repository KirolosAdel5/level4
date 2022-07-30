$(".Click-here").on('click', function() {
    $(".custom-model-main").addClass('model-open');
  }); 
  $(".close-btn, .bg-overlay, .btn-danger").click(function(){
    $(".custom-model-main").removeClass('model-open');
  });
  $('.btn-success').on('click', function(event) {
      event.preventDefault(); // To prevent following the link (optional)
      location.href="https://api.whatsapp.com/send?phone=201289022985&text=welcome";
    });

    var verses = ["به ينتهي إلى النجاح، وبكلمته يقوم الجميع",
    "رُبَّ نجاح يكون لأذى صاحبه",
    "أَمَّا الْحِكْمَةُ فَنَافِعَةٌ لِلإِنْجَاحِ","إِلهَ السَّمَاءِ يُعْطِينَا النَّجَاحَ، وَنَحْنُ عَبِيدُهُ نَقُومُ وَنَبْنِي"
    ,"كَانَ الرَّبُّ مَعَ يُوسُفَ فَكَانَ رَجُلًا نَاجِحًا",
"أَرُومُ أَنْ تَكُونَ نَاجِحًا وَصَحِيحًا، كَمَا أَنَّ نَفْسَكَ نَاجِحَةٌ"];
    const data = [
        {name : '39' ,marks1 : '73' ,marks2 : '-' , marks3 : 74,marks4 : '54',marks5 : '70',att1 : '17',att2 : '5',att3 : '4',att4 : '6',att5 : '55.6'}
        ,{name : '16' ,marks1 : '90' ,marks2 : '75' , marks3 : 72,marks4 : '95',marks5 : '88',att1 : '22',att2 : '3',att3 : '3',att4 : '4',att5 : '64.1'}
        ,{name : '3' ,marks1 : '71' ,marks2 : '65' , marks3 : 77,marks4 : '32.5',marks5 : '72',att1 : '16',att2 : '4',att3 : '1',att4 : '11',att5 : '48.7'}
        ,{name : '2' ,marks1 : '81' ,marks2 : '61' , marks3 : 68,marks4 : '-',marks5 : '66',att1 : '18',att2 : '3',att3 : '3',att4 : '8',att5 : '53.8'}
        ,{name : '22' ,marks1 : '78' ,marks2 : '67' , marks3 : 70,marks4 : '72.5',marks5 : '64',att1 : '13',att2 : '10',att3 : '4',att4 : '4',att5 : '53.8'}
        ,{name : '9' ,marks1 : '73' ,marks2 : '61' , marks3 : 81,marks4 : '48.',marks5 : '80',att1 : '15',att2 : '8',att3 : '4',att4 : '4',att5 : '55.6'}
        ,{name : '40' ,marks1 : '98' ,marks2 : '-' , marks3 : 87,marks4 : '100',marks5 : '70',att1 : '12',att2 : '5',att3 : '6',att4 : '8',att5 : '44.4'}
        ,{name : '6' ,marks1 : '75' ,marks2 : '67' , marks3 : 84,marks4 : '87.5',marks5 : '74',att1 : '12',att2 : '8',att3 : '3',att4 : '8',att5 : '47.0'}
        ,{name : '8' ,marks1 : '85' ,marks2 : '75' , marks3 : 79,marks4 : '27.5',marks5 : '58',att1 : '13',att2 : '2',att3 : '11',att4 : '5',att5 : '46.2'}
        ,{name : '14' ,marks1 : '55' ,marks2 : '61' , marks3 : 86,marks4 : '62.5',marks5 : '50',att1 : '14',att2 : '8',att3 : '3',att4 : '6',att5 : '52.1'}
        ,{name : '5' ,marks1 : '85' ,marks2 : '71' , marks3 : 59,marks4 : '95',marks5 : '76',att1 : '11',att2 : '6',att3 : '3',att4 : '11',att5 : '41.0'}
        ,{name : '13' ,marks1 : '91' ,marks2 : '69' , marks3 : 94,marks4 : '97.5',marks5 : '74',att1 : '25',att2 : '3',att3 : '0',att4 : '3',att5 : '69.2'}
        ,{name : '21' ,marks1 : '93' ,marks2 : '73' , marks3 : 72,marks4 : '70',marks5 : '70',att1 : '12',att2 : '0',att3 : '11',att4 : '8',att5 : '40.2'}
        ,{name : '41' ,marks1 : '35' ,marks2 : '-' , marks3 : 66,marks4 : '75',marks5 : '-',att1 : '17',att2 : '3',att3 : '1',att4 : '10',att5 : '49.6'}
        ,{name : '11' ,marks1 : '56' ,marks2 : '39' , marks3 : 57,marks4 : '17.5',marks5 : '42',att1 : '7',att2 : '6',att3 : '14',att4 : '4',att5 : '40.2'}
        ,{name : '15' ,marks1 : '43' ,marks2 : '61' , marks3 : 70,marks4 : '82.5',marks5 : '52',att1 : '15',att2 : '9',att3 : '3',att4 : '4',att5 : '56.4'}
        ,{name : '18' ,marks1 : '71' ,marks2 : '71' , marks3 : 60,marks4 : '38',marks5 : '40',att1 : '12',att2 : '7',att3 : '5',att4 : '7',att5 : '47.0'}
        ,{name : '42' ,marks1 : '86' ,marks2 : '-' , marks3 : '-',marks4 : '-',marks5 : '-',att1 : '4',att2 : '5',att3 : '6',att4 : '16',att5 : '23.9'}
        ,{name : '4' ,marks1 : '70' ,marks2 : '71' , marks3 : 90,marks4 : '66',marks5 : '92',att1 : '15',att2 : '1',att3 : '10',att4 : '5',att5 : '48.7'}
        ,{name : '7' ,marks1 : '85' ,marks2 : '90' , marks3 : 86,marks4 : '100',marks5 : '92',att1 : '21',att2 : '0',att3 : '4',att4 : '7',att5 : '57.3'}
        ,{name : '43' ,marks1 : '50' ,marks2 : '84' , marks3 : 72,marks4 : '87.5',marks5 : '53',att1 : '13',att2 : '5',att3 : '3',att4 : '10',att5 : '44.4'}
        ,{name : '27' ,marks1 : '96' ,marks2 : '86' , marks3 : 79,marks4 : '92.5',marks5 : '94',att1 : '16',att2 : '4',att3 : '4',att4 : '7',att5 : '51.3'}
        ,{name : '24' ,marks1 : '93' ,marks2 : '78' , marks3 : 84,marks4 : '75',marks5 : '84',att1 : '16',att2 : '10',att3 : '1',att4 : '4',att5 : '59.0'}
        ,{name : '44' ,marks1 : '78' ,marks2 : '-' , marks3 : 66,marks4 : '60',marks5 : '-',att1 : '10',att2 : '7',att3 : '7',att4 : '7',att5 : '43.6'}
        ,{name : '19' ,marks1 : '93' ,marks2 : '84' , marks3 : 90,marks4 : '80',marks5 : '64',att1 : '14',att2 : '5',att3 : '2',att4 : '10',att5 : '46.2'}
        ,{name : '20' ,marks1 : '96' ,marks2 : '86' , marks3 : 86,marks4 : '74',marks5 : '84',att1 : '20',att2 : '4',att3 : '3',att4 : '4',att5 : '60.7'}
        ,{name : '35' ,marks1 : '76' ,marks2 : '63' , marks3 : 78,marks4 : '67.5',marks5 : '42',att1 : '13',att2 : '9',att3 : '2',att4 : '7',att5 : '50.4'}
        ,{name : '17' ,marks1 : '93' ,marks2 : '75' , marks3 : 86,marks4 : '90',marks5 : '90',att1 : '12',att2 : '11',att3 : '1',att4 : '7',att5 : '50.4'}
        ,{name : '38' ,marks1 : '73' ,marks2 : '67' , marks3 : 59,marks4 : '77.5',marks5 : '70',att1 : '19',att2 : '4',att3 : '2',att4 : '6',att5 : '57.3'}
        ,{name : '45' ,marks1 : '51' ,marks2 : '53' , marks3 : 83,marks4 : '60',marks5 : '52',att1 : '15',att2 : '8',att3 : '2',att4 : '6',att5 : '53.8'}
        ,{name : '37' ,marks1 : '65' ,marks2 : '65' , marks3 : 56,marks4 : '18',marks5 : '48',att1 : '9',att2 : '3',att3 : '5',att4 : '14',att5 : '32.5'}
        ,{name : '25' ,marks1 : '100' ,marks2 : '75' , marks3 : 63,marks4 : '90',marks5 : '70',att1 : '17',att2 : '3',att3 : '0',att4 : '11',att5 : '48.7'}
        ,{name : '26' ,marks1 : '76' ,marks2 : '76' , marks3 : 71,marks4 : '87.5',marks5 : '68',att1 : '21',att2 : '2',att3 : '3',att4 : '5',att5 : '59.8'}
        ,{name : '29' ,marks1 : '63' ,marks2 : '75' , marks3 : '-',marks4 : '-',marks5 : '42',att1 : '17',att2 : '5',att3 : '1',att4 : '8',att5 : '53.0'}
        ,{name : '34' ,marks1 : '33' ,marks2 : '45' , marks3 : 64,marks4 : '50',marks5 : '62',att1 : '9',att2 : '6',att3 : '2',att4 : '14',att5 : '35.0'}
        ,{name : '10' ,marks1 : '50' ,marks2 : '43' , marks3 : 34,marks4 : '-',marks5 : '36',att1 : '13',att2 : '11',att3 : '1',att4 : '6',att5 : '53.0'}
        ,{name : '23' ,marks1 : '81' ,marks2 : '41' , marks3 : 86,marks4 : '75',marks5 : '84',att1 : '12',att2 : '10',att3 : '1',att4 : '8',att5 : '48.7'}
        ,{name : '36' ,marks1 : '60' ,marks2 : '53' , marks3 : 48,marks4 : '60',marks5 : '36',att1 : '19',att2 : '5',att3 : '5',att4 : '2',att5 : '61.5'}
        ,{name : '46' ,marks1 : '86' ,marks2 : '59' , marks3 : '-',marks4 : '54',marks5 : '-',att1 : '6',att2 : '11',att3 : '7',att4 : '7',att5 : '40.2'}
        ,{name : '31' ,marks1 : '95' ,marks2 : '94' , marks3 : 84,marks4 : '100',marks5 : '96',att1 : '28',att2 : '0',att3 : '1',att4 : '2',att5 : '72.6'}
        ,{name : '28' ,marks1 : '95' ,marks2 : '82' , marks3 : 94,marks4 : '100',marks5 : '94',att1 : '26',att2 : '4',att3 : '1',att4 : '0',att5 : '74.4'}
        ,{name : '33' ,marks1 : '48' ,marks2 : '55' , marks3 : 63,marks4 : '27.5',marks5 : '60',att1 : '13',att2 : '5',att3 : '0',att4 : '13',att5 : '41.9'}
        ,{name : '30' ,marks1 : '37' ,marks2 : '82' , marks3 : '-',marks4 : '90',marks5 : '72',att1 : '13',att2 : '1',att3 : '7',att4 : '10',att5 : '41.0'}
        ,{name : '32' ,marks1 : '71' ,marks2 : '73' , marks3 : 43,marks4 : '35',marks5 : '74',att1 : '8',att2 : '11',att3 : '2',att4 : '10',att5 : '41.0'}
        ,{name : '1' ,marks1 : '71' ,marks2 : '-' , marks3 : 93,marks4 : '35',marks5 : '74',att1 : '11',att2 : '6',att3 : '3',att4 : '12',att5 : '41.0'}
    ];
const verse = document.getElementById('verse')
const results = document.getElementById('res')
const results2 = document.getElementById('res2')
const results3 = document.getElementById('res3')
const results4 = document.getElementById('res4')
const results5 = document.getElementById('res5')

const att1 = document.getElementById('att1')
const att2 = document.getElementById('att2')
const att3 = document.getElementById('att3')
const att4 = document.getElementById('att4')
const att5 = document.getElementById('att5')

const thxmassage = document.getElementById('thx')

const smBtn = document.getElementById('smt-btn')
smBtn.addEventListener("click", function() {
    
    const name = document.getElementById('code').value;
    for(let i = 0; i < data.length; i++){
        if(data[i].name.toLowerCase() == name.toLowerCase()){
            verse.innerHTML = "''"+verses[Math.floor(Math.random()*verses.length)]+"''";
            console.log(data[i].marks1)
            results.innerHTML = data[i].marks1 + "%"
            results2.innerHTML =data[i].marks2 + "%" 
            results3.innerHTML =data[i].marks3 + "%" 
            results4.innerHTML =data[i].marks4 + "%" 
            results5.innerHTML =data[i].marks5 + "%" 
            att1.innerHTML =data[i].att1   
            att2.innerHTML =data[i].att2 
            att3.innerHTML =data[i].att3
            att4.innerHTML =data[i].att4
            att5.innerHTML =data[i].att5 + "%"
            const [first, last] = document.getElementById('name').value.split(' ');
            thxmassage.innerHTML = " شكرا ليك يا" +" "+ first
            return;
        }
    }    
    verse.innerHTML =  "<h4 style='color:#d43f3a'>"+" تاكد من معلوماتك مرة اخرى و اعد المحاولة"+"<br>" + "اذا كنت تواجه مشكلة اضغط بالاسفل على هل يوجد مشكلة ؟"+"</h4>"
})
