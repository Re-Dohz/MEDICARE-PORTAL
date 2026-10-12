/* ============================================================
   DEVELOPER 9 · PATIENT PROFILE
   File: js/09-patient-profile.js   (you edit ONLY this file)

   YOUR JOB
   Show one patient's full details in the box with id="patient-profile".
   ============================================================ */

function showPatient(patient) {
  document.getElementById("patient-profile").innerHTML = `
    <div class="profile">
      <h3>${patient.name}</h3>
      <dl>
        <dt>Patient ID</dt><dd>#${patient.id}</dd>
        <dt>Age</dt><dd>${patient.age}</dd>
        <dt>Gender</dt><dd>${patient.gender}</dd>
        <dt>Phone</dt><dd>${patient.phone}</dd>
        <dt>Blood group</dt><dd>${patient.bloodGroup}</dd>
        <dt>Status</dt><dd><span class="badge ${getStatusClass(patient)}">${getStatusText(patient)}</span></dd>
      </dl>
    </div>`;
}

function showPatientById(id) {
  const patient = patients.find(function (p) {
    return p.id === id;
  });

  if (patient === undefined) {
    document.getElementById("patient-profile").innerHTML =
      '<p class="empty">Patient not found.</p>';
  } else {
    showPatient(patient);
  }
}
   
