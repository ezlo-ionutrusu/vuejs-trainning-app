<template>
  <div class="left-side">
    <div class="is-hidden-mobile">
      <div class="first-block">
        <div class="first-block-text">
          <div class="title is-size-4 is-marginless has-text-white mb-5">VueJs</div>
          <div class="title is-size-6 is-marginless has-text-black-bis">Application</div>
        </div>
      </div>
      <nav class="nav-menu">
        <ul>
          <li>
            <router-link to="/dashboard">
              <span class="is-uppercase">
                <i>
                  <i class="fas fa-home"></i>
                </i>&nbsp;&nbsp;Home
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/dashboard/devices">
              <span class="is-uppercase">
                <i>
                  <i class="fas fa-charging-station"></i>
                </i>&nbsp;&nbsp;Devices
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/dashboard/users">
              <span class="is-uppercase">
                <i>
                  <i class="fas fa-user"></i>
                </i>&nbsp;&nbsp;Users
              </span>
            </router-link>
          </li>
          <li class="has-text-left">
            <router-link to="/dashboard/settings">
              <span class="is-uppercase">
                <i>
                  <i class="fas fa-cogs"></i>
                </i>&nbsp;&nbsp;Settings
              </span>
            </router-link>
          </li>
          <li>
            <a @click="logOut">
              <span class="is-uppercase">
                <i>
                  <i class="fas fa-sign-out-alt"></i>
                </i>&nbsp;&nbsp;Logout
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="is-hidden-tablet is-hidden-desktop">
      <nav role="navigation" aria-label="main navigation" class="navbar is-transparent">
        <div class="container">
          <div class="navbar-brand">
            <div class="navbar-item">
              <span>VueJS</span>
              <span class="grey-light">Application</span>
            </div>
            <a
              role="button"
              data-target="navMenuMobile"
              aria-label="menu"
              aria-expanded="false"
              class="navbar-burger"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navMenuMobile" class="navbar-menu">
            <div class="navbar-end">
              <div class="navbar-item">
                <div class="tabs">
                  <ul>
                    <li class="has-text-left">
                      <router-link to="/dashboard" @click.native="toggleMenuClick">
                        <span class="is-uppercase">
                          <i>
                            <i class="fas fa-home"></i>
                          </i>&nbsp;&nbsp;Home
                        </span>
                      </router-link>
                    </li>
                    <li class="has-text-left">
                      <router-link to="/dashboard/devices" @click.native="toggleMenuClick">
                        <span class="is-uppercase">
                          <i>
                            <i class="fas fa-charging-station"></i>
                          </i>&nbsp;&nbsp;Devices
                        </span>
                      </router-link>
                    </li>
                    <li class="has-text-left">
                      <router-link to="/dashboard/users" @click.native="toggleMenuClick">
                        <span class="is-uppercase">
                          <i>
                            <i class="fas fa-user"></i>
                          </i>&nbsp;&nbsp;Users
                        </span>
                      </router-link>
                    </li>
                    <li class="has-text-left">
                      <router-link to="/dashboard/settings">
                        <span class="is-uppercase">
                          <i>
                            <i class="fas fa-cogs"></i>
                          </i>&nbsp;&nbsp;Settings
                        </span>
                      </router-link>
                    </li>
                    <li>
                      <a @click="logOut">
                        <span class="is-uppercase">
                          <i>
                            <i class="fas fa-sign-out-alt"></i>
                          </i>&nbsp;&nbsp;Logout
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleMenuClick() {
      const mobileLinkMenu = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-burger"),
        0
      );
      if (mobileLinkMenu.length > 0) {
        mobileLinkMenu.forEach($el => {
          const { target } = $el.dataset;
          const $target = document.getElementById(target);
          $el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      }
    },
    addExpandCollapseEffectsToNav() {
      const mobileLinkMenu = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-burger"),
        0
      );
      if (mobileLinkMenu.length > 0) {
        mobileLinkMenu.forEach($el => {
          $el.addEventListener("click", () => {
            const { target } = $el.dataset;
            const $target = document.getElementById(target);
            $el.classList.toggle("is-active");
            $target.classList.toggle("is-active");
          });
        });
      }
    },
    logOut() {
      this.$store.dispatch("login/setIsAuth", false);
      this.$router.push({ path: "/" });
    }
  },
  mounted() {
    this.addExpandCollapseEffectsToNav();
  }
};
</script>
