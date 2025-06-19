import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import useIsMobile from "../hooks/useIsMobile";

const Form = () => {
  const isMobile = useIsMobile();
  const defaultValues = {
    //Sekection
    facultySelection: "",

    // A. Candidate Information
    fullName: "",
    gender: "",
    dobBS: "",
    dobAD: "",
    nationality: "",
    religion: "",
    bloodGroup: "",

    // B. Address
    permanentAddress: "",
    wardNumber: "",
    VDCMunicipality: "",
    district: "",
    zone: "",
    telephone: "",
    mobile: "",
    fax: "",
    email: "",

    // C. Parents Information
    fatherName: "",
    fatherPermanentAddress: "",
    fatherResidenceTelephone: "",
    fatherMobile: "",
    fatherEmail: "",
    fatherOrganization: "",
    fatherOfficeTelephone: "",

    motherName: "",
    motherPermanentAddress: "",
    motherResidenceTelephone: "",
    motherMobile: "",
    motherEmail: "",
    motherOrganization: "",
    motherOfficeTelephone: "",

    // D. Local Guardian Information
    localGuardianName: "",
    localGuardianAddress: "",
    localGuardianResidenceTelephone: "",
    localGuardianMobile: "",
    localGuardianEmail: "",
    localGuardianOrganization: "",
    localGuardianOfficeTel: "",
    localGuardianRelation: "",

    // E. Previous School Details
    previousSchoolName: "",
    previousSchoolAddress: "",
    previousSchoolVDCMunicipality: "",
    previousSchoolWardNumber: "",
    previousSchoolDistrict: "",
    previousSchoolZone: "",
    previousSchoolTelephone: "",
    previousSchoolEmail: "",

    // F. Previous Schooling
    previousExamBoard: "",
    previousResults: "",

    //G  H, I, J. Additional Questions
    howKnowGEF: [],
    needHostelFacility: "",
    whereDoYouLive: "",
    needCollegeTransportation: "",
    whichMediumOfLearning: "",
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = () => {
    alert("Form submitted sucessfully");
  };
  return (
    <Box sx={{ maxWidth: 1300, mx: "auto", px: isMobile ? 2 : 0 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* === Faculty Selection === */}
        <Paper sx={{ mb: 4, p: 2 }}>
          <Typography
            variant="h6"
            sx={{ mb: 1, fontWeight: "bold", color: "green" }}>
            Faculty Selection (+2)
          </Typography>
          <Controller
            name="facultySelection"
            control={control}
            rules={{ required: "Please slect your faculty" }}
            render={({ field }) => (
              <Box>
                {" "}
                <RadioGroup {...field}>
                  <FormControlLabel
                    control={<Radio value="science" />}
                    label="Science"
                  />
                  <FormControlLabel
                    control={<Radio value="management" />}
                    label="Management"
                  />
                </RadioGroup>
                {errors.facultySelection && (
                  <Typography variant="caption" color="error">
                    {errors.facultyselection?.message}
                  </Typography>
                )}
              </Box>
            )}
          />
        </Paper>

        {/* === A. CANDIDATE INFORMATION FIELDS === */}
        <Paper sx={{ mb: 4, p: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            A. Candidate Information
          </Typography>
          <Grid container spacing={2}>
            {/* Full Name Field */}
            <Grid item size={{ xs: 12 }}>
              <Controller
                name="fullName"
                control={control}
                rules={{ required: "Full Name is required" }}
                render={({ field }) => (
                  <TextField
                    label="Full Name"
                    fullWidth
                    {...field}
                    error={!!errors.fullName}
                    helperText={errors.fullName?.message}
                  />
                )}
              />
            </Grid>
            {/* Gender Field */}
            <Grid item size={{ xs: 12 }}>
              <Controller
                name="gender"
                control={control}
                rules={{
                  required: "Please select your gender",
                }}
                render={({ field }) => (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}>
                    <Typography variant="subtitle1">Gender:</Typography>
                    <RadioGroup row {...field}>
                      <FormControlLabel
                        value="Male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="Female"
                        control={<Radio />}
                        label="Female"
                      />
                    </RadioGroup>
                    {errors.gender && (
                      <Typography variant="caption" color="error">
                        {errors.gender.message}
                      </Typography>
                    )}
                  </Box>
                )}
              />
            </Grid>
            {/* Date of Birth (BS) Field */}
            <Grid item size={{ xs: 12, md: 6 }}>
              <Controller
                name="dobBS"
                control={control}
                rules={{ required: "Date of Birth is required" }}
                render={({ field }) => (
                  <TextField
                    label="Date of Birth BS"
                    fullWidth
                    placeholder="dd/mm/yyyy"
                    type="text"
                    {...field}
                    error={!!errors.dobBS}
                    helperText={errors.dobBS?.message}
                  />
                )}
              />
            </Grid>
            {/* Date of Birth (AD) Field */}
            <Grid item size={{ xs: 12, md: 6 }}>
              <Controller
                name="dobAD"
                control={control}
                rules={{ required: "Date of Birth is required" }}
                render={({ field }) => (
                  <TextField
                    label="Date of Birth AD"
                    fullWidth
                    placeholder="dd/mm/yyyy"
                    type="text"
                    {...field}
                    error={!!errors.dobAD}
                    helperText={errors.dobAD?.message}
                  />
                )}
              />
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <Controller
                name="Nationality"
                control={control}
                rules={{ required: "Nationality is required" }}
                render={({ field }) => (
                  <TextField
                    label="Nationality"
                    fullWidth
                    type="text"
                    {...field}
                    error={!!errors.Nationality}
                    helperText={errors.Nationality?.message}
                  />
                )}
              />
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <Controller
                name="religion"
                control={control}
                rules={{ required: "Religion is required" }}
                render={({ field }) => (
                  <TextField
                    label="Religion"
                    fullWidth
                    type="text"
                    {...field}
                    error={!!errors.religion}
                    helperText={errors.religion?.message}
                  />
                )}
              />
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <Controller
                name="bloodGroup"
                control={control}
                rules={{ required: "Blood Group is required" }}
                render={({ field }) => (
                  <TextField
                    label="Blood Group"
                    fullWidth
                    type="text"
                    {...field}
                    error={!!errors.bloodGroup}
                    helperText={errors.bloodGroup?.message}
                  />
                )}
              />
            </Grid>
          </Grid>
        </Paper>

        {/* === B. ADDRESS FIELDS === */}
        <Paper sx={{ mb: 4, p: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            B. Address
          </Typography>
          <Grid container spacing={2}>
            {/* Permanent Address Field */}
            <Grid item size={{ xs: 12 }}>
              <Controller
                name="permanentAddress"
                control={control}
                rules={{ required: "Permenant Address is required" }}
                render={({ field }) => (
                  <TextField
                    label="Permenant Address"
                    fullWidth
                    type="text"
                    {...field}
                    error={!!errors.permanentAddress}
                    helperText={errors.permanentAddress?.message}
                  />
                )}
              />
            </Grid>
            {/* Ward Number Field */}
            <Grid item size={{ xs: 12, md: 2 }}>
              <Controller
                name="wardNumber"
                control={control}
                rules={{ required: "Ward Number is required" }}
                render={({ field }) => (
                  <TextField
                    label="Ward Number"
                    fullWidth
                    type="text"
                    {...field}
                    error={!!errors.wardNumber}
                    helperText={errors.wardNumber?.message}
                  />
                )}
              />
            </Grid>
            <Grid item size={{ xs: 12, md: 3 }}>
              <Controller
                name="VDCMunicipality"
                control={control}
                rules={{ required: "VDC/ Municiplaity is required" }}
                render={({ field }) => (
                  <TextField
                    label="VDC/ Municiplaity"
                    fullWidth
                    type="text"
                    {...field}
                    error={!!errors.VDCMunicipality}
                    helperText={errors.VDCMunicipality?.message}
                  />
                )}
              />
            </Grid>
            <Grid item size={{ xs: 12, md: 3 }}>
              <Controller
                name="district"
                control={control}
                rules={{ required: "District is required" }}
                render={({ field }) => (
                  <TextField
                    label="District"
                    fullWidth
                    type="text"
                    {...field}
                    error={!!errors.district}
                    helperText={errors.district?.message}
                  />
                )}
              />
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <Controller
                name="zone"
                control={control}
                rules={{ required: "Zone is required" }}
                render={({ field }) => (
                  <TextField
                    label="Zone"
                    fullWidth
                    type="text"
                    {...field}
                    error={!!errors.zone}
                    helperText={errors.zone?.message}
                  />
                )}
              />
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <Controller
                name="telephone"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Telephone"
                    fullWidth
                    type="text"
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <Controller
                name="mobile"
                control={control}
                rules={{
                  minLength: {
                    value: "10",
                    message: "Must have more than 10 numbers",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    label="Mobile"
                    fullWidth
                    type="text"
                    {...field}
                    error={!!errors.mobile}
                    helperText={errors.mobile?.message}
                  />
                )}
              />
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <Controller
                name="fax"
                control={control}
                render={({ field }) => (
                  <TextField label="Fax" fullWidth type="text" {...field} />
                )}
              />
            </Grid>
            <Grid item size={{ xs: 12 }}>
              <Controller
                name="email"
                control={control}
                rules={{
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    label="Email"
                    fullWidth
                    type="text"
                    {...field}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                )}
              />
            </Grid>
          </Grid>
        </Paper>

        {/* === C. PARENTS/GUARDIANS INFORMATION FIELDS === */}
        <Paper sx={{ mb: 4, p: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            C. Parents/Guardians Information
          </Typography>
          <Grid container columnSpacing={4} rowSpacing={2}>
            {/* Father's Information Fields */}{" "}
            <Grid item size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", textAlign: "center" }}>
                  Father
                </Typography>
                {/* Father's Name Field */}
                <Controller
                  name="fatherName"
                  control={control}
                  rules={{ required: "Father's name is required" }}
                  render={({ field }) => (
                    <TextField
                      label="Name"
                      fullWidth
                      type="text"
                      {...field}
                      error={!!errors.fatherName}
                      helperText={errors.fatherName?.message}
                    />
                  )}
                />
                {/* Father's Address Field */}
                <Controller
                  name="fatherPermanentAddress"
                  control={control}
                  rules={{ required: "Permanent Address is required" }}
                  render={({ field }) => (
                    <TextField
                      label="Permanent Address"
                      fullWidth
                      type="text"
                      {...field}
                      error={!!errors.fatherPermanentAddress}
                      helperText={errors.fatherPermanentAddress?.message}
                    />
                  )}
                />
                {/* Father's Residence Telephone Field */}
                <Controller
                  name="fatherResidenceTelephone"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      label="Residence Telephone"
                      fullWidth
                      type="text"
                      {...field}
                    />
                  )}
                />
                {/* Father's Mobile Field */}
                <Controller
                  name="fatherMobile"
                  control={control}
                  rules={{
                    minLength: {
                      value: 10,
                      message: "Must have at least 10 numbers",
                    },
                    maxLength: {
                      value: 10,
                      message: "Must have no more than 10 numbers",
                    },
                    required: "Phone number is required",
                  }}
                  render={({ field }) => (
                    <TextField
                      label="Mobile"
                      fullWidth
                      type="text"
                      {...field}
                      error={!!errors.fatherMobile}
                      helperText={errors.fatherMobile?.message}
                    />
                  )}
                />
                {/* Father's Email Field */}
                <Controller
                  name="fatherEmail"
                  control={control}
                  rules={{
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      label="Email"
                      fullWidth
                      type="text"
                      {...field}
                      error={!!errors.fatherEmail}
                      helperText={errors.fatherEmail?.message}
                    />
                  )}
                />
                {/* Father's Organization (work Place) Field */}
                <Controller
                  name="fatherOrganization"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      label="Organization (work Place)"
                      fullWidth
                      type="text"
                      {...field}
                    />
                  )}
                />
                {/* Father's Office Telephone Field */}
                <Controller
                  name="fatherOfficeTelephone"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      label="Office Telephone"
                      fullWidth
                      type="text"
                      {...field}
                    />
                  )}
                />
              </Box>
            </Grid>
            {/* Mother's Information Fields */}
            <Grid item size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", textAlign: "center" }}>
                  Mother
                </Typography>
                {/* Mother's Name Field */}
                <Controller
                  name="motherName"
                  control={control}
                  rules={{ required: "Mother's name is required" }}
                  render={({ field }) => (
                    <TextField
                      label="Name"
                      fullWidth
                      type="text"
                      {...field}
                      error={!!errors.motherName}
                      helperText={errors.motherName?.message}
                    />
                  )}
                />
                {/* Mother's Address Field */}
                <Controller
                  name="motherPermanentAddress"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      label="Permanent Address"
                      fullWidth
                      type="text"
                      {...field}
                    />
                  )}
                />
                {/* Mother's Residence Telephone Field */}
                <Controller
                  name="motherResidenceTelephone"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      label="Residence Telephone"
                      fullWidth
                      type="text"
                      {...field}
                    />
                  )}
                />
                {/* Mother's Mobile Field */}
                <Controller
                  name="motherMobile"
                  control={control}
                  rules={{
                    minLength: {
                      value: 10,
                      message: "Must have at least 10 numbers",
                    },
                    maxLength: {
                      value: 10,
                      message: "Must have no more than 10 numbers",
                    },
                    required: "Phone number is required",
                  }}
                  render={({ field }) => (
                    <TextField
                      label="Mobile"
                      fullWidth
                      type="text"
                      {...field}
                      error={!!errors.motherMobile}
                      helperText={errors.motherMobile?.message}
                    />
                  )}
                />
                {/* Mother's Email Field */}
                <Controller
                  name="motherEmail"
                  control={control}
                  rules={{
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      label="Email"
                      fullWidth
                      type="text"
                      {...field}
                      error={!!errors.motherEmail}
                      helperText={errors.motherEmail?.message}
                    />
                  )}
                />
                {/* Mother's Organization (work Place) Field */}
                <Controller
                  name="motherOrganization"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      label="Organization (work Place)"
                      fullWidth
                      type="text"
                      {...field}
                    />
                  )}
                />
                {/* Mother's Office Telephone Field */}
                <Controller
                  name="motherOfficeTelephone"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      label="Office Telephone"
                      fullWidth
                      type="text"
                      {...field}
                    />
                  )}
                />
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* === D. LOCAL GUARDIAN INFORMATION FIELDS === */}
        <Paper sx={{ mb: 4, p: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            D. Local Guardians Information
          </Typography>
          <Grid container spacing={2}>
            {/* Guardian's Name Field */}
            <Grid item size={{ xs: 12 }}>
              <Controller
                name="localGuardianName"
                control={control}
                rules={"Local Gurdians Name is required"}
                render={({ field }) => (
                  <TextField
                    label="Name"
                    fullWidth
                    type="text"
                    {...field}
                    error={!!errors.localGuardianName}
                    helperText={errors.localGuardianName?.message}
                  />
                )}
              />
            </Grid>
            {/* Guardian's Address Field */}
            <Grid item size={{ xs: 12 }}>
              <Controller
                name="localGuardianAddress"
                control={control}
                rules={"Local Gurdians Address is required"}
                render={({ field }) => (
                  <TextField
                    label="Local Address"
                    fullWidth
                    type="text"
                    {...field}
                    error={!!errors.localGuardianAddress}
                    helperText={errors.localGuardianAddress?.message}
                  />
                )}
              />
            </Grid>
            {/* Guardian's Residence Telephone Field */}
            <Grid item size={{ xs: 12, md: 4 }}>
              <Controller
                name="localGuardianResidenceTelephone"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Residence Telephone"
                    fullWidth
                    type="text"
                    {...field}
                  />
                )}
              />
            </Grid>
            {/* Guardian's Mobile Field */}
            <Grid item size={{ xs: 12, md: 4 }}>
              <Controller
                name="localGuardianMobile"
                control={control}
                rules={{
                  minLength: {
                    value: 10,
                    message: "Must have at least 10 numbers",
                  },
                  maxLength: {
                    value: 10,
                    message: "Must have no more than 10 numbers",
                  },
                  required: "Phone number is required",
                }}
                render={({ field }) => (
                  <TextField
                    label="Mobile"
                    fullWidth
                    type="text"
                    {...field}
                    error={!!errors.localGuardianMobile}
                    helperText={errors.localGuardianMobile?.message}
                  />
                )}
              />
            </Grid>
            {/* Guardian's Email Field */}
            <Grid item size={{ xs: 12, md: 4 }}>
              <Controller
                name="localGuardianEmail"
                control={control}
                rules={{
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    label="Email"
                    fullWidth
                    type="text"
                    {...field}
                    error={!!errors.localGuardianEmail}
                    helperText={errors.localGuardianEmail?.message}
                  />
                )}
              />
            </Grid>
            {/* Guardian's Organization (work place) Field */}
            <Grid item size={{ xs: 12, md: 4 }}>
              <Controller
                name="localGuardianOrganization"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Organization (work place)"
                    fullWidth
                    type="text"
                    {...field}
                  />
                )}
              />
            </Grid>
            {/* Guardian's Office Tel. Field */}
            <Grid item size={{ xs: 12, md: 4 }}>
              <Controller
                name="localGuardianOfficeTel"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Office Tel."
                    fullWidth
                    type="text"
                    {...field}
                  />
                )}
              />
            </Grid>
            {/* Guardian's Relation Field */}
            <Grid item size={{ xs: 12, md: 4 }}>
              <Controller
                name="localGuardianRelation"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Relation"
                    fullWidth
                    type="text"
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item size={{ xs: 12 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}>
                *** Please clearly mention your relation with local guardian ***
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        {/* === E. PREVIOUS SCHOOL DETAILS FIELDS === */}
        <Paper sx={{ mb: 4, p: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            E. Previous School Details
          </Typography>
          <Grid container spacing={2}>
            {/* School Name Field */}
            <Grid item size={{ xs: 12 }}>
              <Controller
                name="previousSchoolName"
                control={control}
                rules={{ required: "School Name is required" }}
                render={({ field }) => (
                  <TextField
                    label="Name of the School"
                    fullWidth
                    type="text"
                    {...field}
                    error={!!errors.previousSchoolName}
                    helperText={errors.previousSchoolName?.message}
                  />
                )}
              />
            </Grid>
            {/* School Address Field */}
            <Grid item size={{ xs: 12 }}>
              <Controller
                name="previousSchoolAddress"
                control={control}
                rules={{ required: "School Address is required" }}
                render={({ field }) => (
                  <TextField
                    label="School Address"
                    fullWidth
                    type="text"
                    {...field}
                    error={!!errors.previousSchoolAddress}
                    helperText={errors.previousSchoolAddress?.message}
                  />
                )}
              />
            </Grid>
            <Grid item size={{ xs: 12, md: 3 }}>
              <Controller
                name="previousSchoolVDCMunicipality"
                control={control}
                rules={{ required: "VDC/Municipality is required" }}
                render={({ field }) => (
                  <TextField
                    label="VDC/Municipality"
                    fullWidth
                    type="text"
                    {...field}
                    error={!!errors.previousSchoolVDCMunicipality}
                    helperText={errors.previousSchoolVDCMunicipality?.message}
                  />
                )}
              />
            </Grid>
            <Grid item size={{ xs: 12, md: 2 }}>
              <Controller
                name="previousSchoolWardNumber"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Ward Number."
                    fullWidth
                    type="text"
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item size={{ xs: 12, md: 3 }}>
              <Controller
                name="previousSchoolDistrict"
                control={control}
                rules={{ required: "District is required" }}
                render={({ field }) => (
                  <TextField
                    label="District"
                    fullWidth
                    type="text"
                    {...field}
                    error={!!errors.previousSchoolDistrict}
                    helperText={errors.previousSchoolDistrict?.message}
                  />
                )}
              />
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <Controller
                name="previousSchoolZone"
                control={control}
                rules={{ required: "Zone is required" }}
                render={({ field }) => (
                  <TextField
                    label="Zone"
                    fullWidth
                    type="text"
                    {...field}
                    error={!!errors.previousSchoolZone}
                    helperText={errors.previousSchoolZone?.message}
                  />
                )}
              />
            </Grid>
            <Grid item size={{ xs: 12, md: 6 }}>
              <Controller
                name="previousSchoolTelephone"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Telephone"
                    fullWidth
                    type="text"
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item size={{ xs: 12, md: 6 }}>
              <Controller
                name="previousSchoolEmail"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    label="Email"
                    fullWidth
                    type="text"
                    {...field}
                    error={!!errors.previousSchoolEmail}
                    helperText={errors.previousSchoolEmail?.message}
                  />
                )}
              />
            </Grid>
          </Grid>
        </Paper>

        {/* === F. PREVIOUS SCHOOLING FIELDS === */}
        <Paper sx={{ mb: 4, p: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            C. Previous Schooling
          </Typography>
          <Grid container spacing={2}>
            {/* Examination Field */}
            <Grid item size={{ xs: 12, md: 6 }}>
              <Controller
                name="examination"
                control={control}
                rules={{ required: "Examination field is required" }}
                render={({ field }) => (
                  <TextField
                    label="Examination"
                    fullWidth
                    type="text"
                    {...field}
                    error={!!errors.examination}
                    helperText={errors.examination?.message}
                  />
                )}
              />
            </Grid>
            {/* Board/Country Field */}
            <Grid item size={{ xs: 12, md: 6 }}>
              <Controller
                name="boardCountry"
                control={control}
                rules={{ required: "Board/Country field is required" }}
                render={({ field }) => (
                  <TextField
                    label="Board/Country"
                    fullWidth
                    type="text"
                    {...field}
                    error={!!errors.boardCountry}
                    helperText={errors.boardCountry?.message}
                  />
                )}
              />
            </Grid>
            {/* Year of completion Field */}
            <Grid item size={{ xs: 12, md: 4 }}>
              <Controller
                name="yearOfCompletion"
                control={control}
                rules={{ required: "Year of completion field is required" }}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    label="Year of completion"
                    placeholder="dd/mm/yyyy"
                    {...field}
                    error={!!errors.yearOfCompletion}
                    helperText={errors.yearOfCompletion?.message}
                  />
                )}
              />
            </Grid>
            {/* Board/Country Field */}
            <Grid item size={{ xs: 12, md: 4 }}>
              <Controller
                name="precentage"
                control={control}
                rules={{ required: "Precentage field is required" }}
                render={({ field }) => (
                  <TextField
                    label="Precentage(%)achieved"
                    fullWidth
                    type="text"
                    {...field}
                    error={!!errors.precentage}
                    helperText={errors.precentage?.message}
                  />
                )}
              />
            </Grid>
            {/* Division Field */}
            <Grid item size={{ xs: 12, md: 4 }}>
              <Controller
                name="division"
                control={control}
                rules={{ required: "Division field is required" }}
                render={({ field }) => (
                  <TextField
                    label="Division"
                    fullWidth
                    type="text"
                    {...field}
                    error={!!errors.division}
                    helperText={errors.division?.message}
                  />
                )}
              />
            </Grid>
            {/* Major Subjects Field */}
            <Grid item size={{ xs: 12, md: 6 }}>
              <Controller
                name="majorSubject"
                control={control}
                rules={{ required: "Major Subject field is required" }}
                render={({ field }) => (
                  <TextField
                    label="Major Subject"
                    fullWidth
                    type="text"
                    {...field}
                    error={!!errors.majorSubject}
                    helperText={errors.majorSubject?.message}
                  />
                )}
              />
            </Grid>
            {/* Optional Subjects Field */}
            <Grid item size={{ xs: 12, md: 6 }}>
              <Controller
                name="optionalSubject"
                control={control}
                rules={{ required: "Optional Subject field is required" }}
                render={({ field }) => (
                  <TextField
                    label="Optional Subject"
                    fullWidth
                    type="text"
                    {...field}
                    error={!!errors.optionalSubject}
                    helperText={errors.optionalSubject?.message}
                  />
                )}
              />
            </Grid>
          </Grid>
        </Paper>

        {/* === G. HOW DID YOU KNOW ABOUT GEF FIELDS === */}
        <Paper sx={{ mb: 4, p: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            G. How did you now abouy GEF?
          </Typography>
          <Grid container spacing={2}>
            <Grid item size={{ xs: 12, md: 4 }}>
              <Controller
                name="howKnowGEF"
                control={control}
                render={({ field }) => (
                  <Box>
                    <FormControlLabel
                      control={<Checkbox {...field} value="field.value" />}
                      label="From Teachers"
                    />
                  </Box>
                )}
              />
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <Controller
                name="howKnowGEF"
                control={control}
                render={({ field }) => (
                  <Box>
                    <FormControlLabel
                      control={<Checkbox {...field} value="field.value" />}
                      label="Newspaper/Advertisement"
                    />
                  </Box>
                )}
              />
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <Controller
                name="howKnowGEF"
                control={control}
                render={({ field }) => (
                  <Box>
                    <FormControlLabel
                      control={<Checkbox {...field} value="field.value" />}
                      label="Exhibition or Seminar"
                    />
                  </Box>
                )}
              />
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <Controller
                name="howKnowGEF"
                control={control}
                render={({ field }) => (
                  <Box>
                    <FormControlLabel
                      control={<Checkbox {...field} value="field.value" />}
                      label="Recommendation from Friends"
                    />
                  </Box>
                )}
              />
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <Controller
                name="howKnowGEF"
                control={control}
                render={({ field }) => (
                  <Box>
                    <FormControlLabel
                      control={<Checkbox {...field} value="field.value" />}
                      label="Senior Students"
                    />
                  </Box>
                )}
              />
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <Controller
                name="howKnowGEF"
                control={control}
                render={({ field }) => (
                  <Box>
                    <FormControlLabel
                      control={<Checkbox {...field} value="field.value" />}
                      label="Parents of Relatives"
                    />
                  </Box>
                )}
              />
            </Grid>
          </Grid>
        </Paper>

        {/* === H. HOSTEL FACILITY PREFERENCE FIELDS === */}
        <Paper sx={{ mb: 4, p: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            H. Do you prefer hostel facility of the college{" "}
          </Typography>
          <Grid container spacing={2}>
            <Grid item size={{ xs: 12 }}>
              <Controller
                name="needHostelFacility"
                control={control}
                rules={{
                  required: "Please select if you need hostel facility",
                }}
                render={({ field }) => (
                  <Box>
                    <RadioGroup row {...field}>
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                    {errors.needHostelFacility && (
                      <Typography variant="caption" color="error">
                        {errors.needHostelFacility.message}
                      </Typography>
                    )}
                  </Box>
                )}
              />
            </Grid>

            <Grid item size={{ xs: 12 }}>
              <Controller
                name="whereDoYouLive"
                control={control}
                render={({ field }) => (
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 1,
                        fontStyle: "italic",
                        fontWeight: "semi-bold",
                      }}>
                      If not, where do you live?
                    </Typography>
                    <RadioGroup row={!isMobile} {...field}>
                      <FormControlLabel
                        value="Home"
                        control={<Radio />}
                        label="Home"
                      />
                      <FormControlLabel
                        value="Rent"
                        control={<Radio />}
                        label="Rent"
                      />
                      <FormControlLabel
                        value="Private hostel"
                        control={<Radio />}
                        label="Private hostel"
                      />
                      <FormControlLabel
                        value="Relatives"
                        control={<Radio />}
                        label="Relatives"
                      />
                    </RadioGroup>
                  </Box>
                )}
              />
            </Grid>
          </Grid>
        </Paper>

        {/* === I. TRANSPORTATION FACILITY FIELDS === */}
        <Paper sx={{ mb: 4, p: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            I. Do you need college transportation facility{" "}
          </Typography>{" "}
          <Controller
            name="needCollegeTransportation"
            control={control}
            rules={{
              required: "Please select if you need transportation",
            }}
            render={({ field }) => (
              <Box>
                <RadioGroup row {...field}>
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
                {errors.needCollegeTransportation && (
                  <Typography variant="caption" color="error">
                    {errors.needCollegeTransportation.message}
                  </Typography>
                )}
              </Box>
            )}
          />
        </Paper>

        {/* === J. LEARNING MEDIUM PREFERENCE FIELDS === */}
        <Paper sx={{ mb: 4, p: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            J. Which medium of learning do you prefer{" "}
          </Typography>{" "}
          <Controller
            name="whichMediumOfLearning"
            control={control}
            rules={{
              required: "Please select your preferred medium of learning",
            }}
            render={({ field }) => (
              <Box>
                <RadioGroup {...field}>
                  <FormControlLabel
                    value="English"
                    control={<Radio />}
                    label="English"
                  />
                  <FormControlLabel
                    value="Nepali"
                    control={<Radio />}
                    label="Nepali"
                  />
                </RadioGroup>
                {errors.whichMediumOfLearning && (
                  <Typography variant="caption" color="error">
                    {errors.whichMediumOfLearning.message}
                  </Typography>
                )}
              </Box>
            )}
          />
        </Paper>

        <Button
          variant="contained"
          type="submit"
          sx={{
            px: 2,
            py: 1,
            bgcolor: "green",
            fontSize: isMobile ? "1rem" : "1.2rem",
          }}>
          Submit Form
        </Button>
      </form>
    </Box>
  );
};

export default Form;
