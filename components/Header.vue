<template>
  <div class="conatiner-fluid">
    <div class="container-fluid bgColor-black Color-white px-4 py-4">
      <div class="row justify-content-md-center mx-lg-2">
        <div class="col-md-5">
          <span>PHONE: +75 8746 958</span>
          <span class="ml-2">EMAIL: ZIMCONNECT@ZIMWORX.COM</span>
        </div>
        <div class="col-md-4 col-lg-5"></div>
        <div class="col-md-3 col-lg-2 text-right">
          <NuxtLink class="Color-white text-decoration-none" to="/register" title="Register">
            <span class="mr-5">SIGNUP</span>
          </NuxtLink>
          <NuxtLink class="Color-white text-decoration-none" to="/login" title="Login">
            <span>SIGNIN</span>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="container-fluid bgColor-gray-20 py-3">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-3">
            <h1 class="title text-shadow mt-2">ZIMCONNECT</h1>
          </div>
          <div class="col-md-6">
            <ul class="Color-gray-60 body-detail mt-3">
              <li class="display-inline mx-2">
                <NuxtLink class="Color-gray-60 text-decoration-none" to="/" title="Home">
                  Home
                </NuxtLink>
              </li>
              <li class="display-inline mx-2">Jobs</li>
              <li class="display-inline mx-2">Candidates</li>
              <li class="display-inline mx-2">Employers</li>
              <li class="display-inline mx-2">Contact Us</li>
              <li class="display-inline mx-2"><i class="fa fa-search"></i></li>
            </ul>
          </div>
          <div class="col-md-3">
            <NuxtLink class="text-decoration-none" to="/login" title="Login">
              <div class="button button-primary border-radius-8 contracted">
                FOR EMPLOYERS
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>