
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqmveXa4d2QclGj3HAvRbcwRzQ9NEC2x4",
  authDomain: "vplay-xxxx.firebaseapp.com",
  databaseURL: "https://vplay-xxxx-default-rtdb.firebaseio.com",
  projectId: "vplay-xxxx",
  storageBucket: "vplay-xxxx.appspot.com",
  messagingSenderId: "408824533753",
  appId: "1:408824533753:web:565187862ef38cea758828",
  measurementId: "G-EWG55E65M1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const storage = getStorage(app);

// General function to save data
function saveData(path, data) {
  return set(ref(database, path), data)
    .then(() => {
      console.log('Data saved successfully!');
    })
    .catch((error) => {
      console.error('Error saving data:', error);
    });
}

// Upload image to Firebase Storage and get the download URL
async function uploadImage(imageFile, folderName) {
  return new Promise((resolve, reject) => {
    if (!imageFile) {
      resolve(''); // No file provided
    } else {
      const storageReference = storageRef(storage, `${folderName}/images/${imageFile.name}`);
      uploadBytes(storageReference, imageFile)
        .then((snapshot) => getDownloadURL(snapshot.ref))
        .then((downloadURL) => resolve(downloadURL))
        .catch((error) => reject(error));
    }
  });
}

// Section 1: Save customization data
async function saveSection1Data(folderName) {
  const logoColor = document.getElementById('bg-color').value || '';
  const buttonBgColor = document.getElementById('white-color').value || '';
  const buttonColor = document.getElementById('btn-color').value || '';
  const navbarColor = document.getElementById('navbar-color').value || '';
  const logoFile = document.getElementById('logo').files[0];
  const logoURL = await uploadImage(logoFile, folderName);

  return {
    logoColor,
    buttonBgColor,
    buttonColor,
    navbarColor,
    logoURL
  };
}

// Section 2: Save image and color data
async function saveSection2Data(folderName) {
  const image1 = document.getElementById('primeira-imagem').files[0];
  const image2 = document.getElementById('segunda-imagem').files[0];
  const bgColor = document.getElementById('cf-color').value || '';
  const textColor = document.getElementById('ct-color').value || '';
  const buttonColor = document.getElementById('cb-color').value || '';

  const image1URL = await uploadImage(image1, folderName);

  return {
    image1: image1URL,
    bgColor,
    textColor,
    buttonColor
  };
}

// Section 3: Save site type and color data
function saveSection3Data() {
  const siteType = document.getElementById('tipo-de-site').value || '';
  const bgColor = document.getElementById('cfg-color').value || '';
  const imageBgColor = document.getElementById('caa-color').value || '';
  const buttonColor = document.getElementById('cbt-color').value || '';

  return {
    siteType,
    bgColor,
    imageBgColor,
    buttonColor
  };
}

// Section 4: Save background and text color data
function saveSection4Data() {
  const bgColor = document.getElementById('www-color').value || '';
  const elementBgColor = document.getElementById('aaa-color').value || '';
  const titleColor = document.getElementById('bbb-color').value || '';
  const textColor = document.getElementById('ccc-color').value || '';
  const buttonColor = document.getElementById('ddd-color').value || '';

  return {
    bgColor,
    elementBgColor,
    titleColor,
    textColor,
    buttonColor
  };
}

// Section 5: Save form data
function saveSection5Data() {
  const service = document.getElementById('selecionar').value;
  const weeks = document.getElementById('semanas').value;
  const hours = document.getElementById('horas').value;
  const siteName = document.getElementById('NomeSite').value;

  // Obter dados de todos os inputs de serviço e preço
  const serviceInputs = document.querySelectorAll('.serviço-input');
  const priceInputs = document.querySelectorAll('.preço-input');

  // Mapear os dados dos inputs para um array de objetos
  const servicesAndPrices = Array.from(serviceInputs).map((input, index) => ({
    serviço: input.value,
    preço: priceInputs[index].value
  }));

  return {
    service,
    weeks,
    hours,
    siteName,
    serviçosEPrecos: servicesAndPrices // Adicionando os serviços e preços à estrutura de dados retornada
  };
}

// Section 6: Save account data
function saveSection6Data() {
  const NomeUsuário = document.querySelectorAll('.Input')[0].value;
  const userPassword = document.querySelectorAll('.Input')[1].value;
  
  return {
    NomeUsuário,
    userPassword,
  };
}

// Save all sections data
async function saveAllData() {
  const NomeUsuário = document.querySelector('#NomeUsuário').value;
  const allData = {
    section1: await saveSection1Data(NomeUsuário),
    section2: await saveSection2Data(NomeUsuário),
    section3: saveSection3Data(),
    section4: saveSection4Data(),
    section5: saveSection5Data(),
    section6: saveSection6Data()
  };

  return saveData(`Clientes/${NomeUsuário}`, allData);
}

// Functions to save data and proceed to next section
async function rolarParaSegundaSection() {
  const NomeUsuário = document.querySelector('#NomeUsuário').value;
  const section1Data = await saveSection1Data(NomeUsuário);
  await saveData(`Clientes/${NomeUsuário}/section1`, section1Data);
  // Logic to scroll to the second section
}

async function rolarParaTerceiraSection() {
  const NomeUsuário = document.querySelector('#NomeUsuário').value;
  const section2Data = await saveSection2Data(NomeUsuário);
  await saveData(`Clientes/${NomeUsuário}/section2`, section2Data);
  // Logic to scroll to the third section
}

async function rolarParaQuartaSection() {
  const NomeUsuário = document.querySelector('#NomeUsuário').value;
  const section3Data = saveSection3Data();
  await saveData(`Clientes/${NomeUsuário}/section3`, section3Data);
  // Logic to scroll to the fourth section
}

async function rolarParaQuintaSection() {
  const NomeUsuário = document.querySelector('#NomeUsuário').value;
  const section4Data = saveSection4Data();
  await saveData(`Clientes/${NomeUsuário}/section4`, section4Data);
  // Logic to scroll to the fifth section
}

async function rolarParaSextaSection() {
  const NomeUsuário = document.querySelector('#NomeUsuário').value;
  const section5Data = saveSection5Data();
  await saveData(`Clientes/${NomeUsuário}/section5`, section5Data);
  // Logic to scroll to the sixth section
}


  // Function to show notification and redirect
  function showNotificationAndRedirect() {
    alert('Seu site ficará pronto em até 5 horas! Receba o link no seu e-mail e whatsapp para acessá-lo de qualquer lugar.');
    if (confirm('Deseja ser redirecionado para a página de pagamento?')) {
      window.location.href = "https://buy.stripe.com/eVa4hL4H42yp4007ss";
    }
  }

  // Event listener for the submit button
  document.querySelector('.continuar-button-sexta').addEventListener('click', async (event) => {
    event.preventDefault(); // Prevent form submission

    // Verificar se as imagens obrigatórias estão preenchidas
    const mandatoryImageInputs = document.querySelectorAll('#primeira-imagem, #segunda-imagem, #terceira-imagem');
    let allImagesFilled = true;
    mandatoryImageInputs.forEach(input => {
      if (!input.files[0]) {
        allImagesFilled = false;
        return; // Exit loop if any mandatory image is missing
      }
    });

    if (!allImagesFilled) {
      alert("Por favor, faça o upload das duas imagens obrigatórias antes de prosseguir.");
      return; // Exit function if mandatory images are missing
    }

    // Save data
    await saveAllData();

    // Show notification and redirect after 2 seconds
    setTimeout(showNotificationAndRedirect, 2000);
  });
