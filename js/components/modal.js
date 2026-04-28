function setLoading(btn, state){
  if(state){
    btn.innerText = "Processing...";
    btn.disabled = true;
  } else {
    btn.innerText = "Submit";
    btn.disabled = false;
  }
}