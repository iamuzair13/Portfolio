'use server'

const contactAction = async (formData) => {
  const BusinessEmail = formData.get("BusinessEmail");
  const budget = formData.get("budget");
  const projectDetails = formData.get("projectDetails");
  const referance = formData.get("referance");


  console.log('Received form data:', { BusinessEmail, budget, projectDetails, referance });
  
}

export { contactAction };