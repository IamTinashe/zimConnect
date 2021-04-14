<template>
  <div class="w-100">
    <div class="container-fluid bgColor-gray-30 py-5">
      <div class="container text-left">
        <h1 class="Color-gray-60 title-large pt-4">My Account</h1>
        <p>
          <span class="Color-black group-header">Home</span>
          &nbsp;
          <span class="Color-white feature-paragraph">My Account</span>
        </p>
      </div>
    </div>
    <div class="container-fluid bgColor-gray-10 py-5">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-12 col-lg-8">
            <h2 class="text-center Color-gray-80 subhead py-4">LOGIN</h2>
            <form class="form pt-3">
              <label class="ml-2 Color-gray-80 feature-paragraph" for="email">Email Address*</label>
              <input type="email" id="email" class="form-input w-100 px-3 py-3 mb-4"/>

              <label class="ml-2 Color-gray-80 feature-paragraph" for="password">Password*</label>
              <input type="password" id="password" class="form-input w-100 px-3 py-3 mb-4"/>

              <div class="button button-primary border-radius-16 py-3">
                LOGIN
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>