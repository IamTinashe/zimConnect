<template>
  <div class="w-100 home bgimage">
    <div class="container-fluid">
      <div class="container mt-5 mt-lg-0 pt-5 pt-lg-0">
        <div class="row hero">
          <div class="col-lg-12 middle-align">
            <p class="text-center text-hero Color-white pb-1">
              <strong style="font-weight: 600">Browse Candidates </strong>
            </p>
            <p class="text-center paragraph-large Color-white pb-2">
              Connecting First Class Virtual Teams to the World
            </p>
            <div class="row justify-content-md-center">
              <div class="col-12 col-lg-10">
                <NuxtLink to="/hire" title="Find Candidates" class="text-decoration-none">
                  <div
                    class="
                      button
                      bgColor-primary
                      borderColor-primary
                      button-primary
                      border-radius-8
                      w-25
                      py-3
                    "
                  >
                    <i class="fa fa-search fa-1x Color-white"></i>
                    <span class="px-2 feature-paragraph">Get Started</span>
                  </div>
                </NuxtLink>
                <!--<form class="form">
                  <div class="row justify-content-md-center pb-5">
                    <div class="col-lg-5">
                      <select class="px-3 select feature-paragraph Color-gray-60 mb-3">
                        <option>What are you looking for?</option>
                      </select>
                      <select class="px-3 select feature-paragraph Color-gray-60 mb-3">
                        <option>All Types</option>
                      </select>
                    </div>
                    <div class="col-lg-5">
                      <select class="px-3 select feature-paragraph Color-gray-60 mb-3">
                        <option>Work Schedule</option>
                      </select>
                      <select class="px-3 select feature-paragraph Color-gray-60 mb-3">
                        <option>Profession</option>
                      </select>
                    </div>
                  </div>
                  <div class="row justify-content-md-center">
                    <div class="col-lg-3">
                      <NuxtLink to="/hire" title="Find Candidates">
                        <div class="button bgColor-primary borderColor-primary button-primary border-radius-8 w-75 py-1">
                          <i class="fa fa-search fa-1x Color-white"></i>
                          <span class="px-2">Search</span>
                        </div>
                      </NuxtLink>
                    </div>
                  </div>
                </form> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>