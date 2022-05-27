var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __commonJS = (callback, module) => () => {
  if (!module) {
    module = {exports: {}};
    callback(module.exports, module);
  }
  return module.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};

// dist/dist/pages/home.svelte.js
var require_home_svelte = __commonJS((exports) => {
  __markAsModule(exports);
  __export(exports, {
    default: () => home_svelte_default
  });
  function create_fragment22(ctx) {
    let main;
    return {
      c() {
        main = element("main");
        main.textContent = "my page";
      },
      m(target, anchor) {
        insert(target, main, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(main);
      }
    };
  }
  function instance13($$self) {
    onMount(() => {
      UserStore.subscribe((user) => {
        if (!user) {
          console.log("[warning]: not logged in, redirecting to login page.");
          replace("/login");
        }
      });
    });
    return [];
  }
  var Home = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance13, create_fragment22, safe_not_equal, {});
    }
  };
  var home_svelte_default = Home;
});

// dist/dist/pages/auth/login.svelte.js
var require_login_svelte = __commonJS((exports) => {
  __markAsModule(exports);
  __export(exports, {
    default: () => login_svelte_default
  });
  function create_default_slot_4(ctx) {
    let t;
    return {
      c() {
        t = text("Welcome back!");
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_else_block2(ctx) {
    return {c: noop, m: noop, d: noop};
  }
  function create_if_block4(ctx) {
    let br;
    return {
      c() {
        br = element("br");
      },
      m(target, anchor) {
        insert(target, br, anchor);
      },
      d(detaching) {
        if (detaching)
          detach(br);
      }
    };
  }
  function create_default_slot_3(ctx) {
    let t0;
    let t1;
    function select_block_type(ctx2, dirty) {
      if (ctx2[5] === true)
        return create_if_block4;
      return create_else_block2;
    }
    let current_block_type = select_block_type(ctx, -1);
    let if_block = current_block_type(ctx);
    return {
      c() {
        t0 = text("I recognise you but can't quite remember your name,");
        if_block.c();
        t1 = text(" would you mind telling it to me again?");
      },
      m(target, anchor) {
        insert(target, t0, anchor);
        if_block.m(target, anchor);
        insert(target, t1, anchor);
      },
      p(ctx2, dirty) {
        if (current_block_type !== (current_block_type = select_block_type(ctx2, dirty))) {
          if_block.d(1);
          if_block = current_block_type(ctx2);
          if (if_block) {
            if_block.c();
            if_block.m(t1.parentNode, t1);
          }
        }
      },
      d(detaching) {
        if (detaching)
          detach(t0);
        if_block.d(detaching);
        if (detaching)
          detach(t1);
      }
    };
  }
  function create_default_slot_22(ctx) {
    let t;
    return {
      c() {
        t = text("Login");
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_default_slot_12(ctx) {
    let t;
    return {
      c() {
        t = text("Say my name");
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_default_slot2(ctx) {
    let t0;
    let br;
    let t1;
    return {
      c() {
        t0 = text("Want to create an account instead? ");
        br = element("br");
        t1 = text(" Register Now!");
      },
      m(target, anchor) {
        insert(target, t0, anchor);
        insert(target, br, anchor);
        insert(target, t1, anchor);
      },
      p: noop,
      d(detaching) {
        if (detaching)
          detach(t0);
        if (detaching)
          detach(br);
        if (detaching)
          detach(t1);
      }
    };
  }
  function create_fragment22(ctx) {
    let t0;
    let main;
    let header0;
    let heading0;
    let t1;
    let heading1;
    let t2;
    let form;
    let inputfield0;
    let updating_value;
    let t3;
    let inputfield1;
    let updating_value_1;
    let t4;
    let link0;
    let t5;
    let div;
    let checkbox;
    let t6;
    let heading2;
    let t7;
    let section;
    let header1;
    let button0;
    let t8;
    let button1;
    let t9;
    let button2;
    let t10;
    let link1;
    let t11;
    let footer;
    let current;
    heading0 = new heading_svelte_default({
      props: {
        variant: "title",
        $$slots: {default: [create_default_slot_4]},
        $$scope: {ctx}
      }
    });
    heading1 = new heading_svelte_default({
      props: {
        variant: "paragraph",
        $$slots: {default: [create_default_slot_3]},
        $$scope: {ctx}
      }
    });
    function inputfield0_value_binding(value) {
      ctx[8](value);
    }
    let inputfield0_props = {
      label: "Login",
      placeholder: "ex: ID, Username, E-mail",
      variant: "primary"
    };
    if (ctx[2] !== void 0) {
      inputfield0_props.value = ctx[2];
    }
    inputfield0 = new field_svelte_default({props: inputfield0_props});
    ctx[7](inputfield0);
    binding_callbacks.push(() => bind(inputfield0, "value", inputfield0_value_binding));
    function inputfield1_value_binding(value) {
      ctx[10](value);
    }
    let inputfield1_props = {
      type: "password",
      label: "Password",
      placeholder: "*******************",
      variant: "primary"
    };
    if (ctx[3] !== void 0) {
      inputfield1_props.value = ctx[3];
    }
    inputfield1 = new field_svelte_default({props: inputfield1_props});
    ctx[9](inputfield1);
    binding_callbacks.push(() => bind(inputfield1, "value", inputfield1_value_binding));
    link0 = new link_svelte_default({
      props: {
        href: "/forgot-password",
        label: "Forgot your password?"
      }
    });
    checkbox = new checkbox_svelte_default({
      props: {checked: ctx[4]}
    });
    checkbox.$on("click", ctx[11]);
    heading2 = new heading_svelte_default({
      props: {
        label: "Remember me",
        variant: "paragraph"
      }
    });
    button0 = new index_svelte_default({
      props: {
        variant: "solid",
        $$slots: {default: [create_default_slot_22]},
        $$scope: {ctx}
      }
    });
    button0.$on("click", ctx[6]);
    button1 = new index_svelte_default({props: {variant: "NeoExpertise"}});
    button1.$on("click", handleLoginNeoExpertise);
    button2 = new index_svelte_default({
      props: {
        variant: "outlined",
        $$slots: {default: [create_default_slot_12]},
        $$scope: {ctx}
      }
    });
    button2.$on("click", handleSayMyName);
    link1 = new link_svelte_default({
      props: {
        href: "/register",
        $$slots: {default: [create_default_slot2]},
        $$scope: {ctx}
      }
    });
    footer = new index_svelte_default2({});
    return {
      c() {
        t0 = space();
        main = element("main");
        header0 = element("header");
        create_component(heading0.$$.fragment);
        t1 = space();
        create_component(heading1.$$.fragment);
        t2 = space();
        form = element("form");
        create_component(inputfield0.$$.fragment);
        t3 = space();
        create_component(inputfield1.$$.fragment);
        t4 = space();
        create_component(link0.$$.fragment);
        t5 = space();
        div = element("div");
        create_component(checkbox.$$.fragment);
        t6 = space();
        create_component(heading2.$$.fragment);
        t7 = space();
        section = element("section");
        header1 = element("header");
        create_component(button0.$$.fragment);
        t8 = space();
        create_component(button1.$$.fragment);
        t9 = space();
        create_component(button2.$$.fragment);
        t10 = space();
        create_component(link1.$$.fragment);
        t11 = space();
        create_component(footer.$$.fragment);
        document.title = "Login Into Your Account - PasswordGenerator";
        attr(header0, "class", "svelte-1wvo06g");
        attr(div, "class", "remember-section svelte-1wvo06g");
        attr(form, "class", "svelte-1wvo06g");
        attr(header1, "class", "svelte-1wvo06g");
        attr(section, "class", "cta-section svelte-1wvo06g");
        attr(main, "class", "svelte-1wvo06g");
      },
      m(target, anchor) {
        insert(target, t0, anchor);
        insert(target, main, anchor);
        append(main, header0);
        mount_component(heading0, header0, null);
        append(header0, t1);
        mount_component(heading1, header0, null);
        append(main, t2);
        append(main, form);
        mount_component(inputfield0, form, null);
        append(form, t3);
        mount_component(inputfield1, form, null);
        append(form, t4);
        mount_component(link0, form, null);
        append(form, t5);
        append(form, div);
        mount_component(checkbox, div, null);
        append(div, t6);
        mount_component(heading2, div, null);
        append(main, t7);
        append(main, section);
        append(section, header1);
        mount_component(button0, header1, null);
        append(header1, t8);
        mount_component(button1, header1, null);
        append(section, t9);
        mount_component(button2, section, null);
        append(section, t10);
        mount_component(link1, section, null);
        append(main, t11);
        mount_component(footer, main, null);
        current = true;
      },
      p(ctx2, [dirty]) {
        const heading0_changes = {};
        if (dirty & 8192) {
          heading0_changes.$$scope = {dirty, ctx: ctx2};
        }
        heading0.$set(heading0_changes);
        const heading1_changes = {};
        if (dirty & 8224) {
          heading1_changes.$$scope = {dirty, ctx: ctx2};
        }
        heading1.$set(heading1_changes);
        const inputfield0_changes = {};
        if (!updating_value && dirty & 4) {
          updating_value = true;
          inputfield0_changes.value = ctx2[2];
          add_flush_callback(() => updating_value = false);
        }
        inputfield0.$set(inputfield0_changes);
        const inputfield1_changes = {};
        if (!updating_value_1 && dirty & 8) {
          updating_value_1 = true;
          inputfield1_changes.value = ctx2[3];
          add_flush_callback(() => updating_value_1 = false);
        }
        inputfield1.$set(inputfield1_changes);
        const checkbox_changes = {};
        if (dirty & 16)
          checkbox_changes.checked = ctx2[4];
        checkbox.$set(checkbox_changes);
        const button0_changes = {};
        if (dirty & 8192) {
          button0_changes.$$scope = {dirty, ctx: ctx2};
        }
        button0.$set(button0_changes);
        const button2_changes = {};
        if (dirty & 8192) {
          button2_changes.$$scope = {dirty, ctx: ctx2};
        }
        button2.$set(button2_changes);
        const link1_changes = {};
        if (dirty & 8192) {
          link1_changes.$$scope = {dirty, ctx: ctx2};
        }
        link1.$set(link1_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(heading0.$$.fragment, local);
        transition_in(heading1.$$.fragment, local);
        transition_in(inputfield0.$$.fragment, local);
        transition_in(inputfield1.$$.fragment, local);
        transition_in(link0.$$.fragment, local);
        transition_in(checkbox.$$.fragment, local);
        transition_in(heading2.$$.fragment, local);
        transition_in(button0.$$.fragment, local);
        transition_in(button1.$$.fragment, local);
        transition_in(button2.$$.fragment, local);
        transition_in(link1.$$.fragment, local);
        transition_in(footer.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(heading0.$$.fragment, local);
        transition_out(heading1.$$.fragment, local);
        transition_out(inputfield0.$$.fragment, local);
        transition_out(inputfield1.$$.fragment, local);
        transition_out(link0.$$.fragment, local);
        transition_out(checkbox.$$.fragment, local);
        transition_out(heading2.$$.fragment, local);
        transition_out(button0.$$.fragment, local);
        transition_out(button1.$$.fragment, local);
        transition_out(button2.$$.fragment, local);
        transition_out(link1.$$.fragment, local);
        transition_out(footer.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(t0);
        if (detaching)
          detach(main);
        destroy_component(heading0);
        destroy_component(heading1);
        ctx[7](null);
        destroy_component(inputfield0);
        ctx[9](null);
        destroy_component(inputfield1);
        destroy_component(link0);
        destroy_component(checkbox);
        destroy_component(heading2);
        destroy_component(button0);
        destroy_component(button1);
        destroy_component(button2);
        destroy_component(link1);
        destroy_component(footer);
      }
    };
  }
  function handleLoginNeoExpertise() {
    console.log("");
  }
  function handleSayMyName() {
    const name = prompt("Your name \n tip: meth");
    if (name === "heisenberg") {
      alert("You're goddamn right.");
    } else {
      alert("hmm, can't recognise it.");
    }
  }
  function instance13($$self, $$props, $$invalidate) {
    let loginInput;
    let passwordInput;
    let login;
    let password;
    let rememberUser = true;
    function handleSubmitForm() {
      if (!login) {
        loginInput.setError({message: "hey, fill me please"});
      }
      if (!password) {
        passwordInput.setError({message: "Don't forget about me"});
      }
      const proceed = login && password;
      if (!proceed) {
        return;
      }
      const users = JSON.parse(localStorage.getItem("@password-generator:users") || "[]");
      const user = users.find((user2) => {
        const {id, username, email} = user2;
        if (id === login || username === login || email === login) {
          return user2;
        }
        return null;
      });
      if (!user) {
        loginInput.setError({
          message: "uhm strange, could not find a user with this login."
        });
        return;
      }
      const passwordMatch = user.password === password;
      if (!passwordMatch) {
        passwordInput.setError({
          message: "i'm sorry to inform this but, your password is incorrect"
        });
        return;
      }
      if (rememberUser) {
        localStorage.setItem("@password-generator:logged-user-id", user.id);
      }
      UserStore.set(user);
      replace("/");
    }
    let breakText = true;
    const mql = window.matchMedia("(max-width: 744px)");
    mql.addEventListener("change", (event) => {
      if (event.matches) {
        $$invalidate(5, breakText = false);
      }
    });
    function inputfield0_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        loginInput = $$value;
        $$invalidate(0, loginInput);
      });
    }
    function inputfield0_value_binding(value) {
      login = value;
      $$invalidate(2, login);
    }
    function inputfield1_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        passwordInput = $$value;
        $$invalidate(1, passwordInput);
      });
    }
    function inputfield1_value_binding(value) {
      password = value;
      $$invalidate(3, password);
    }
    const click_handler = (event) => $$invalidate(4, rememberUser = event.detail.value);
    return [
      loginInput,
      passwordInput,
      login,
      password,
      rememberUser,
      breakText,
      handleSubmitForm,
      inputfield0_binding,
      inputfield0_value_binding,
      inputfield1_binding,
      inputfield1_value_binding,
      click_handler
    ];
  }
  var Login = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance13, create_fragment22, safe_not_equal, {});
    }
  };
  var login_svelte_default = Login;
});

// dist/dist/pages/auth/register.svelte.js
var require_register_svelte = __commonJS((exports) => {
  __markAsModule(exports);
  __export(exports, {
    default: () => register_svelte_default
  });
  function create_default_slot_3(ctx) {
    let t;
    return {
      c() {
        t = text("Hey there!");
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_default_slot_22(ctx) {
    let t;
    return {
      c() {
        t = text("You're new around here aren't you? Well that's no problem, just tell me\n      some of your info and I'll sign you up.");
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_default_slot_12(ctx) {
    let t;
    return {
      c() {
        t = text("Register");
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_default_slot2(ctx) {
    let t;
    return {
      c() {
        t = text("Already has an account?");
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_fragment22(ctx) {
    let t0;
    let main;
    let header0;
    let heading0;
    let t1;
    let heading1;
    let t2;
    let form;
    let inputfield0;
    let updating_value;
    let t3;
    let inputfield1;
    let updating_value_1;
    let t4;
    let inputfield2;
    let updating_value_2;
    let t5;
    let div;
    let checkbox;
    let t6;
    let heading2;
    let t7;
    let section;
    let header1;
    let button0;
    let t8;
    let button1;
    let t9;
    let button2;
    let t10;
    let link2;
    let t11;
    let footer;
    let current;
    heading0 = new heading_svelte_default({
      props: {
        variant: "title",
        $$slots: {default: [create_default_slot_3]},
        $$scope: {ctx}
      }
    });
    heading1 = new heading_svelte_default({
      props: {
        variant: "paragraph",
        $$slots: {default: [create_default_slot_22]},
        $$scope: {ctx}
      }
    });
    function inputfield0_value_binding(value) {
      ctx[9](value);
    }
    let inputfield0_props = {
      label: "Username",
      placeholder: "ex: @VitorGouveia",
      variant: "primary"
    };
    if (ctx[3] !== void 0) {
      inputfield0_props.value = ctx[3];
    }
    inputfield0 = new field_svelte_default({props: inputfield0_props});
    ctx[8](inputfield0);
    binding_callbacks.push(() => bind(inputfield0, "value", inputfield0_value_binding));
    function inputfield1_value_binding(value) {
      ctx[11](value);
    }
    let inputfield1_props = {
      label: "E-mail",
      placeholder: "ex: vitorneves.gouveia10@gmail.com",
      variant: "primary"
    };
    if (ctx[4] !== void 0) {
      inputfield1_props.value = ctx[4];
    }
    inputfield1 = new field_svelte_default({props: inputfield1_props});
    ctx[10](inputfield1);
    binding_callbacks.push(() => bind(inputfield1, "value", inputfield1_value_binding));
    function inputfield2_value_binding(value) {
      ctx[13](value);
    }
    let inputfield2_props = {
      type: "password",
      label: "Password",
      placeholder: "*******************",
      variant: "primary"
    };
    if (ctx[5] !== void 0) {
      inputfield2_props.value = ctx[5];
    }
    inputfield2 = new field_svelte_default({props: inputfield2_props});
    ctx[12](inputfield2);
    binding_callbacks.push(() => bind(inputfield2, "value", inputfield2_value_binding));
    checkbox = new checkbox_svelte_default({
      props: {checked: ctx[6]}
    });
    checkbox.$on("click", ctx[14]);
    heading2 = new heading_svelte_default({
      props: {
        label: "Remember me",
        variant: "paragraph"
      }
    });
    button0 = new index_svelte_default({
      props: {
        variant: "solid",
        $$slots: {default: [create_default_slot_12]},
        $$scope: {ctx}
      }
    });
    button0.$on("click", ctx[7]);
    button1 = new index_svelte_default({props: {variant: "NeoExpertise"}});
    button1.$on("click", handleLoginNeoExpertise);
    button2 = new index_svelte_default({props: {variant: "MoonKnight"}});
    link2 = new link_svelte_default({
      props: {
        href: "/login",
        $$slots: {default: [create_default_slot2]},
        $$scope: {ctx}
      }
    });
    footer = new index_svelte_default2({});
    return {
      c() {
        t0 = space();
        main = element("main");
        header0 = element("header");
        create_component(heading0.$$.fragment);
        t1 = space();
        create_component(heading1.$$.fragment);
        t2 = space();
        form = element("form");
        create_component(inputfield0.$$.fragment);
        t3 = space();
        create_component(inputfield1.$$.fragment);
        t4 = space();
        create_component(inputfield2.$$.fragment);
        t5 = space();
        div = element("div");
        create_component(checkbox.$$.fragment);
        t6 = space();
        create_component(heading2.$$.fragment);
        t7 = space();
        section = element("section");
        header1 = element("header");
        create_component(button0.$$.fragment);
        t8 = space();
        create_component(button1.$$.fragment);
        t9 = space();
        create_component(button2.$$.fragment);
        t10 = space();
        create_component(link2.$$.fragment);
        t11 = space();
        create_component(footer.$$.fragment);
        document.title = "Login Into Your Account - PasswordGenerator";
        attr(header0, "class", "svelte-1vss2m9");
        attr(div, "class", "remember-section svelte-1vss2m9");
        attr(form, "class", "svelte-1vss2m9");
        attr(header1, "class", "svelte-1vss2m9");
        attr(section, "class", "cta-section svelte-1vss2m9");
        attr(main, "class", "svelte-1vss2m9");
      },
      m(target, anchor) {
        insert(target, t0, anchor);
        insert(target, main, anchor);
        append(main, header0);
        mount_component(heading0, header0, null);
        append(header0, t1);
        mount_component(heading1, header0, null);
        append(main, t2);
        append(main, form);
        mount_component(inputfield0, form, null);
        append(form, t3);
        mount_component(inputfield1, form, null);
        append(form, t4);
        mount_component(inputfield2, form, null);
        append(form, t5);
        append(form, div);
        mount_component(checkbox, div, null);
        append(div, t6);
        mount_component(heading2, div, null);
        append(main, t7);
        append(main, section);
        append(section, header1);
        mount_component(button0, header1, null);
        append(header1, t8);
        mount_component(button1, header1, null);
        append(section, t9);
        mount_component(button2, section, null);
        append(section, t10);
        mount_component(link2, section, null);
        append(main, t11);
        mount_component(footer, main, null);
        current = true;
      },
      p(ctx2, [dirty]) {
        const heading0_changes = {};
        if (dirty & 131072) {
          heading0_changes.$$scope = {dirty, ctx: ctx2};
        }
        heading0.$set(heading0_changes);
        const heading1_changes = {};
        if (dirty & 131072) {
          heading1_changes.$$scope = {dirty, ctx: ctx2};
        }
        heading1.$set(heading1_changes);
        const inputfield0_changes = {};
        if (!updating_value && dirty & 8) {
          updating_value = true;
          inputfield0_changes.value = ctx2[3];
          add_flush_callback(() => updating_value = false);
        }
        inputfield0.$set(inputfield0_changes);
        const inputfield1_changes = {};
        if (!updating_value_1 && dirty & 16) {
          updating_value_1 = true;
          inputfield1_changes.value = ctx2[4];
          add_flush_callback(() => updating_value_1 = false);
        }
        inputfield1.$set(inputfield1_changes);
        const inputfield2_changes = {};
        if (!updating_value_2 && dirty & 32) {
          updating_value_2 = true;
          inputfield2_changes.value = ctx2[5];
          add_flush_callback(() => updating_value_2 = false);
        }
        inputfield2.$set(inputfield2_changes);
        const checkbox_changes = {};
        if (dirty & 64)
          checkbox_changes.checked = ctx2[6];
        checkbox.$set(checkbox_changes);
        const button0_changes = {};
        if (dirty & 131072) {
          button0_changes.$$scope = {dirty, ctx: ctx2};
        }
        button0.$set(button0_changes);
        const link_changes = {};
        if (dirty & 131072) {
          link_changes.$$scope = {dirty, ctx: ctx2};
        }
        link2.$set(link_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(heading0.$$.fragment, local);
        transition_in(heading1.$$.fragment, local);
        transition_in(inputfield0.$$.fragment, local);
        transition_in(inputfield1.$$.fragment, local);
        transition_in(inputfield2.$$.fragment, local);
        transition_in(checkbox.$$.fragment, local);
        transition_in(heading2.$$.fragment, local);
        transition_in(button0.$$.fragment, local);
        transition_in(button1.$$.fragment, local);
        transition_in(button2.$$.fragment, local);
        transition_in(link2.$$.fragment, local);
        transition_in(footer.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(heading0.$$.fragment, local);
        transition_out(heading1.$$.fragment, local);
        transition_out(inputfield0.$$.fragment, local);
        transition_out(inputfield1.$$.fragment, local);
        transition_out(inputfield2.$$.fragment, local);
        transition_out(checkbox.$$.fragment, local);
        transition_out(heading2.$$.fragment, local);
        transition_out(button0.$$.fragment, local);
        transition_out(button1.$$.fragment, local);
        transition_out(button2.$$.fragment, local);
        transition_out(link2.$$.fragment, local);
        transition_out(footer.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(t0);
        if (detaching)
          detach(main);
        destroy_component(heading0);
        destroy_component(heading1);
        ctx[8](null);
        destroy_component(inputfield0);
        ctx[10](null);
        destroy_component(inputfield1);
        ctx[12](null);
        destroy_component(inputfield2);
        destroy_component(checkbox);
        destroy_component(heading2);
        destroy_component(button0);
        destroy_component(button1);
        destroy_component(button2);
        destroy_component(link2);
        destroy_component(footer);
      }
    };
  }
  function handleLoginNeoExpertise() {
    console.log("");
  }
  function instance13($$self, $$props, $$invalidate) {
    let usernameInput;
    let emailInput;
    let passwordInput;
    let username;
    let email;
    let password;
    let rememberUser = true;
    function handleSubmitForm() {
      if (!username) {
        usernameInput.setError({message: "hey, fill me please"});
      }
      if (!email) {
        emailInput.setError({message: "hey, fill me please"});
      }
      if (!password) {
        passwordInput.setError({message: "Don't forget about me"});
      }
      const proceed = username && email && password;
      if (!proceed) {
        return;
      }
      const users = JSON.parse(localStorage.getItem("@password-generator:users") || "[]");
      const usernameAlreadyExists = users.find((user2) => user2.email === email);
      if (usernameAlreadyExists) {
        usernameInput.setError({
          message: "sorry, a user already took that username."
        });
      }
      const userAlreadyExists = users.find((user2) => user2.email === email);
      if (userAlreadyExists) {
        emailInput.setError({
          message: "uhm a user already took that e-mail. Haven't you already created your account by any chance?"
        });
        return;
      }
      const user = {
        id: nanoid(10),
        username,
        email,
        password
      };
      localStorage.setItem("@password-generator:users", JSON.stringify([user, ...users]));
      UserStore.set(user);
      replace("/");
    }
    let breakText = true;
    const mql = window.matchMedia("(max-width: 744px)");
    mql.addEventListener("change", (event) => {
      if (event.matches) {
        breakText = false;
      }
    });
    function inputfield0_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        usernameInput = $$value;
        $$invalidate(0, usernameInput);
      });
    }
    function inputfield0_value_binding(value) {
      username = value;
      $$invalidate(3, username);
    }
    function inputfield1_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        emailInput = $$value;
        $$invalidate(1, emailInput);
      });
    }
    function inputfield1_value_binding(value) {
      email = value;
      $$invalidate(4, email);
    }
    function inputfield2_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        passwordInput = $$value;
        $$invalidate(2, passwordInput);
      });
    }
    function inputfield2_value_binding(value) {
      password = value;
      $$invalidate(5, password);
    }
    const click_handler = (event) => $$invalidate(6, rememberUser = event.detail.value);
    return [
      usernameInput,
      emailInput,
      passwordInput,
      username,
      email,
      password,
      rememberUser,
      handleSubmitForm,
      inputfield0_binding,
      inputfield0_value_binding,
      inputfield1_binding,
      inputfield1_value_binding,
      inputfield2_binding,
      inputfield2_value_binding,
      click_handler
    ];
  }
  var Register = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance13, create_fragment22, safe_not_equal, {});
    }
  };
  var register_svelte_default = Register;
});

// dist/_snowpack/env.js
var env_exports = {};
__export(env_exports, {
  MODE: () => MODE,
  NODE_ENV: () => NODE_ENV,
  SSR: () => SSR
});
var MODE = "production";
var NODE_ENV = "production";
var SSR = false;

// dist/_snowpack/pkg/common/index-11698622.js
function noop() {
}
function assign(tar, src) {
  for (const k in src)
    tar[k] = src[k];
  return tar;
}
function run(fn) {
  return fn();
}
function blank_object() {
  return Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
var src_url_equal_anchor;
function src_url_equal(element_src, url) {
  if (!src_url_equal_anchor) {
    src_url_equal_anchor = document.createElement("a");
  }
  src_url_equal_anchor.href = url;
  return element_src === src_url_equal_anchor.href;
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function create_slot(definition, ctx, $$scope, fn) {
  if (definition) {
    const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
    return definition[0](slot_ctx);
  }
}
function get_slot_context(definition, ctx, $$scope, fn) {
  return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
}
function get_slot_changes(definition, $$scope, dirty, fn) {
  if (definition[2] && fn) {
    const lets = definition[2](fn(dirty));
    if ($$scope.dirty === void 0) {
      return lets;
    }
    if (typeof lets === "object") {
      const merged = [];
      const len = Math.max($$scope.dirty.length, lets.length);
      for (let i = 0; i < len; i += 1) {
        merged[i] = $$scope.dirty[i] | lets[i];
      }
      return merged;
    }
    return $$scope.dirty | lets;
  }
  return $$scope.dirty;
}
function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
  if (slot_changes) {
    const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
    slot.p(slot_context, slot_changes);
  }
}
function get_all_dirty_from_scope($$scope) {
  if ($$scope.ctx.length > 32) {
    const dirty = [];
    const length = $$scope.ctx.length / 32;
    for (let i = 0; i < length; i++) {
      dirty[i] = -1;
    }
    return dirty;
  }
  return -1;
}
function null_to_empty(value) {
  return value == null ? "" : value;
}
function action_destroyer(action_result) {
  return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
}
function append(target, node) {
  target.appendChild(node);
}
function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}
function detach(node) {
  node.parentNode.removeChild(node);
}
function destroy_each(iterations, detaching) {
  for (let i = 0; i < iterations.length; i += 1) {
    if (iterations[i])
      iterations[i].d(detaching);
  }
}
function element(name) {
  return document.createElement(name);
}
function svg_element(name) {
  return document.createElementNS("http://www.w3.org/2000/svg", name);
}
function text(data) {
  return document.createTextNode(data);
}
function space() {
  return text(" ");
}
function empty() {
  return text("");
}
function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}
function attr(node, attribute, value) {
  if (value == null)
    node.removeAttribute(attribute);
  else if (node.getAttribute(attribute) !== value)
    node.setAttribute(attribute, value);
}
function set_attributes(node, attributes) {
  const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);
  for (const key in attributes) {
    if (attributes[key] == null) {
      node.removeAttribute(key);
    } else if (key === "style") {
      node.style.cssText = attributes[key];
    } else if (key === "__value") {
      node.value = node[key] = attributes[key];
    } else if (descriptors[key] && descriptors[key].set) {
      node[key] = attributes[key];
    } else {
      attr(node, key, attributes[key]);
    }
  }
}
function children(element2) {
  return Array.from(element2.childNodes);
}
function set_data(text2, data) {
  data = "" + data;
  if (text2.wholeText !== data)
    text2.data = data;
}
function custom_event(type, detail, {bubbles = false, cancelable = false} = {}) {
  const e = document.createEvent("CustomEvent");
  e.initCustomEvent(type, bubbles, cancelable, detail);
  return e;
}
var current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}
function afterUpdate(fn) {
  get_current_component().$$.after_update.push(fn);
}
function onDestroy(fn) {
  get_current_component().$$.on_destroy.push(fn);
}
function createEventDispatcher() {
  const component = get_current_component();
  return (type, detail, {cancelable = false} = {}) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = custom_event(type, detail, {cancelable});
      callbacks.slice().forEach((fn) => {
        fn.call(component, event);
      });
      return !event.defaultPrevented;
    }
    return true;
  };
}
function bubble(component, event) {
  const callbacks = component.$$.callbacks[event.type];
  if (callbacks) {
    callbacks.slice().forEach((fn) => fn.call(this, event));
  }
}
var dirty_components = [];
var binding_callbacks = [];
var render_callbacks = [];
var flush_callbacks = [];
var resolved_promise = Promise.resolve();
var update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function tick() {
  schedule_update();
  return resolved_promise;
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
function add_flush_callback(fn) {
  flush_callbacks.push(fn);
}
var seen_callbacks = new Set();
var flushidx = 0;
function flush() {
  const saved_component = current_component;
  do {
    while (flushidx < dirty_components.length) {
      const component = dirty_components[flushidx];
      flushidx++;
      set_current_component(component);
      update(component.$$);
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
var outroing = new Set();
var outros;
function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros
  };
}
function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }
  outros = outros.p;
}
function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}
function transition_out(block, local, detach2, callback) {
  if (block && block.o) {
    if (outroing.has(block))
      return;
    outroing.add(block);
    outros.c.push(() => {
      outroing.delete(block);
      if (callback) {
        if (detach2)
          block.d(1);
        callback();
      }
    });
    block.o(local);
  }
}
function get_spread_update(levels, updates) {
  const update2 = {};
  const to_null_out = {};
  const accounted_for = {$$scope: 1};
  let i = levels.length;
  while (i--) {
    const o = levels[i];
    const n = updates[i];
    if (n) {
      for (const key in o) {
        if (!(key in n))
          to_null_out[key] = 1;
      }
      for (const key in n) {
        if (!accounted_for[key]) {
          update2[key] = n[key];
          accounted_for[key] = 1;
        }
      }
      levels[i] = n;
    } else {
      for (const key in o) {
        accounted_for[key] = 1;
      }
    }
  }
  for (const key in to_null_out) {
    if (!(key in update2))
      update2[key] = void 0;
  }
  return update2;
}
function get_spread_object(spread_props) {
  return typeof spread_props === "object" && spread_props !== null ? spread_props : {};
}
function bind(component, name, callback) {
  const index = component.$$.props[name];
  if (index !== void 0) {
    component.$$.bound[index] = callback;
    callback(component.$$.ctx[index]);
  }
}
function create_component(block) {
  block && block.c();
}
function mount_component(component, target, anchor, customElement) {
  const {fragment, on_mount, on_destroy: on_destroy2, after_update} = component.$$;
  fragment && fragment.m(target, anchor);
  if (!customElement) {
    add_render_callback(() => {
      const new_on_destroy = on_mount.map(run).filter(is_function);
      if (on_destroy2) {
        on_destroy2.push(...new_on_destroy);
      } else {
        run_all(new_on_destroy);
      }
      component.$$.on_mount = [];
    });
  }
  after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }
  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}
function init(component, options, instance13, create_fragment22, not_equal2, props, append_styles2, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const $$ = component.$$ = {
    fragment: null,
    ctx: null,
    props,
    update: noop,
    not_equal: not_equal2,
    bound: blank_object(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
    callbacks: blank_object(),
    dirty,
    skip_bound: false,
    root: options.target || parent_component.$$.root
  };
  append_styles2 && append_styles2($$.root);
  let ready = false;
  $$.ctx = instance13 ? instance13(component, options.props || {}, (i, ret, ...rest) => {
    const value = rest.length ? rest[0] : ret;
    if ($$.ctx && not_equal2($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i])
        $$.bound[i](value);
      if (ready)
        make_dirty(component, i);
    }
    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update);
  $$.fragment = create_fragment22 ? create_fragment22($$.ctx) : false;
  if (options.target) {
    if (options.hydrate) {
      const nodes = children(options.target);
      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      $$.fragment && $$.fragment.c();
    }
    if (options.intro)
      transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor, options.customElement);
    flush();
  }
  set_current_component(parent_component);
}
var SvelteComponent = class {
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }
  $on(type, callback) {
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1)
        callbacks.splice(index, 1);
    };
  }
  $set($$props) {
    if (this.$$set && !is_empty($$props)) {
      this.$$.skip_bound = true;
      this.$$set($$props);
      this.$$.skip_bound = false;
    }
  }
};

// dist/_snowpack/pkg/common/index-6bcd21d6.js
var subscriber_queue = [];
function readable(value, start2) {
  return {
    subscribe: writable(value, start2).subscribe
  };
}
function writable(value, start2 = noop) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update2(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start2(set) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return {set, update: update2, subscribe: subscribe2};
}
function derived(stores, fn, initial_value) {
  const single = !Array.isArray(stores);
  const stores_array = single ? [stores] : stores;
  const auto = fn.length < 2;
  return readable(initial_value, (set) => {
    let inited = false;
    const values = [];
    let pending = 0;
    let cleanup = noop;
    const sync = () => {
      if (pending) {
        return;
      }
      cleanup();
      const result = fn(single ? values[0] : values, set);
      if (auto) {
        set(result);
      } else {
        cleanup = is_function(result) ? result : noop;
      }
    };
    const unsubscribers = stores_array.map((store, i) => subscribe(store, (value) => {
      values[i] = value;
      pending &= ~(1 << i);
      if (inited) {
        sync();
      }
    }, () => {
      pending |= 1 << i;
    }));
    inited = true;
    sync();
    return function stop() {
      run_all(unsubscribers);
      cleanup();
    };
  });
}

// dist/dist/store/user.js
var UserStore = writable(null);

// dist/_snowpack/pkg/common/wrap-a3479a19.js
function wrap(args) {
  if (!args) {
    throw Error("Parameter args is required");
  }
  if (!args.component == !args.asyncComponent) {
    throw Error("One and only one of component and asyncComponent is required");
  }
  if (args.component) {
    args.asyncComponent = () => Promise.resolve(args.component);
  }
  if (typeof args.asyncComponent != "function") {
    throw Error("Parameter asyncComponent must be a function");
  }
  if (args.conditions) {
    if (!Array.isArray(args.conditions)) {
      args.conditions = [args.conditions];
    }
    for (let i = 0; i < args.conditions.length; i++) {
      if (!args.conditions[i] || typeof args.conditions[i] != "function") {
        throw Error("Invalid parameter conditions[" + i + "]");
      }
    }
  }
  if (args.loadingComponent) {
    args.asyncComponent.loading = args.loadingComponent;
    args.asyncComponent.loadingParams = args.loadingParams || void 0;
  }
  const obj = {
    component: args.asyncComponent,
    userData: args.userData,
    conditions: args.conditions && args.conditions.length ? args.conditions : void 0,
    props: args.props && Object.keys(args.props).length ? args.props : {},
    _sveltesparouter: true
  };
  return obj;
}

// dist/_snowpack/pkg/svelte-spa-router.js
function parse(str, loose) {
  if (str instanceof RegExp)
    return {keys: false, pattern: str};
  var c, o, tmp, ext, keys = [], pattern = "", arr = str.split("/");
  arr[0] || arr.shift();
  while (tmp = arr.shift()) {
    c = tmp[0];
    if (c === "*") {
      keys.push("wild");
      pattern += "/(.*)";
    } else if (c === ":") {
      o = tmp.indexOf("?", 1);
      ext = tmp.indexOf(".", 1);
      keys.push(tmp.substring(1, !!~o ? o : !!~ext ? ext : tmp.length));
      pattern += !!~o && !~ext ? "(?:/([^/]+?))?" : "/([^/]+?)";
      if (!!~ext)
        pattern += (!!~o ? "?" : "") + "\\" + tmp.substring(ext);
    } else {
      pattern += "/" + tmp;
    }
  }
  return {
    keys,
    pattern: new RegExp("^" + pattern + (loose ? "(?=$|/)" : "/?$"), "i")
  };
}
function create_else_block(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  const switch_instance_spread_levels = [ctx[2]];
  var switch_value = ctx[0];
  function switch_props(ctx2) {
    let switch_instance_props = {};
    for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    }
    return {props: switch_instance_props};
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props());
    switch_instance.$on("routeEvent", ctx[7]);
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }
      insert(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const switch_instance_changes = dirty & 4 ? get_spread_update(switch_instance_spread_levels, [get_spread_object(ctx2[2])]) : {};
      if (switch_value !== (switch_value = ctx2[0])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props());
          switch_instance.$on("routeEvent", ctx2[7]);
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(switch_instance_anchor);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function create_if_block(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  const switch_instance_spread_levels = [{params: ctx[1]}, ctx[2]];
  var switch_value = ctx[0];
  function switch_props(ctx2) {
    let switch_instance_props = {};
    for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    }
    return {props: switch_instance_props};
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props());
    switch_instance.$on("routeEvent", ctx[6]);
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }
      insert(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const switch_instance_changes = dirty & 6 ? get_spread_update(switch_instance_spread_levels, [
        dirty & 2 && {params: ctx2[1]},
        dirty & 4 && get_spread_object(ctx2[2])
      ]) : {};
      if (switch_value !== (switch_value = ctx2[0])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props());
          switch_instance.$on("routeEvent", ctx2[6]);
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(switch_instance_anchor);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function create_fragment(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[1])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function getLocation() {
  const hashPosition = window.location.href.indexOf("#/");
  let location2 = hashPosition > -1 ? window.location.href.substr(hashPosition + 1) : "/";
  const qsPosition = location2.indexOf("?");
  let querystring2 = "";
  if (qsPosition > -1) {
    querystring2 = location2.substr(qsPosition + 1);
    location2 = location2.substr(0, qsPosition);
  }
  return {location: location2, querystring: querystring2};
}
var loc = readable(null, function start(set) {
  set(getLocation());
  const update2 = () => {
    set(getLocation());
  };
  window.addEventListener("hashchange", update2, false);
  return function stop() {
    window.removeEventListener("hashchange", update2, false);
  };
});
var location = derived(loc, ($loc) => $loc.location);
var querystring = derived(loc, ($loc) => $loc.querystring);
var params = writable(void 0);
async function replace(location2) {
  if (!location2 || location2.length < 1 || location2.charAt(0) != "/" && location2.indexOf("#/") !== 0) {
    throw Error("Invalid parameter location");
  }
  await tick();
  const dest = (location2.charAt(0) == "#" ? "" : "#") + location2;
  try {
    const newState = {...history.state};
    delete newState["__svelte_spa_router_scrollX"];
    delete newState["__svelte_spa_router_scrollY"];
    window.history.replaceState(newState, void 0, dest);
  } catch (e) {
    console.warn("Caught exception while replacing the current page. If you're running this in the Svelte REPL, please note that the `replace` method might not work in this environment.");
  }
  window.dispatchEvent(new Event("hashchange"));
}
function link(node, opts) {
  opts = linkOpts(opts);
  if (!node || !node.tagName || node.tagName.toLowerCase() != "a") {
    throw Error('Action "link" can only be used with <a> tags');
  }
  updateLink(node, opts);
  return {
    update(updated) {
      updated = linkOpts(updated);
      updateLink(node, updated);
    }
  };
}
function updateLink(node, opts) {
  let href = opts.href || node.getAttribute("href");
  if (href && href.charAt(0) == "/") {
    href = "#" + href;
  } else if (!href || href.length < 2 || href.slice(0, 2) != "#/") {
    throw Error('Invalid value for "href" attribute: ' + href);
  }
  node.setAttribute("href", href);
  node.addEventListener("click", (event) => {
    event.preventDefault();
    if (!opts.disabled) {
      scrollstateHistoryHandler(event.currentTarget.getAttribute("href"));
    }
  });
}
function linkOpts(val) {
  if (val && typeof val == "string") {
    return {href: val};
  } else {
    return val || {};
  }
}
function scrollstateHistoryHandler(href) {
  history.replaceState({
    ...history.state,
    __svelte_spa_router_scrollX: window.scrollX,
    __svelte_spa_router_scrollY: window.scrollY
  }, void 0, void 0);
  window.location.hash = href;
}
function instance($$self, $$props, $$invalidate) {
  let {routes = {}} = $$props;
  let {prefix = ""} = $$props;
  let {restoreScrollState = false} = $$props;
  class RouteItem {
    constructor(path, component2) {
      if (!component2 || typeof component2 != "function" && (typeof component2 != "object" || component2._sveltesparouter !== true)) {
        throw Error("Invalid component object");
      }
      if (!path || typeof path == "string" && (path.length < 1 || path.charAt(0) != "/" && path.charAt(0) != "*") || typeof path == "object" && !(path instanceof RegExp)) {
        throw Error('Invalid value for "path" argument - strings must start with / or *');
      }
      const {pattern, keys} = parse(path);
      this.path = path;
      if (typeof component2 == "object" && component2._sveltesparouter === true) {
        this.component = component2.component;
        this.conditions = component2.conditions || [];
        this.userData = component2.userData;
        this.props = component2.props || {};
      } else {
        this.component = () => Promise.resolve(component2);
        this.conditions = [];
        this.props = {};
      }
      this._pattern = pattern;
      this._keys = keys;
    }
    match(path) {
      if (prefix) {
        if (typeof prefix == "string") {
          if (path.startsWith(prefix)) {
            path = path.substr(prefix.length) || "/";
          } else {
            return null;
          }
        } else if (prefix instanceof RegExp) {
          const match = path.match(prefix);
          if (match && match[0]) {
            path = path.substr(match[0].length) || "/";
          } else {
            return null;
          }
        }
      }
      const matches = this._pattern.exec(path);
      if (matches === null) {
        return null;
      }
      if (this._keys === false) {
        return matches;
      }
      const out = {};
      let i = 0;
      while (i < this._keys.length) {
        try {
          out[this._keys[i]] = decodeURIComponent(matches[i + 1] || "") || null;
        } catch (e) {
          out[this._keys[i]] = null;
        }
        i++;
      }
      return out;
    }
    async checkConditions(detail) {
      for (let i = 0; i < this.conditions.length; i++) {
        if (!await this.conditions[i](detail)) {
          return false;
        }
      }
      return true;
    }
  }
  const routesList = [];
  if (routes instanceof Map) {
    routes.forEach((route, path) => {
      routesList.push(new RouteItem(path, route));
    });
  } else {
    Object.keys(routes).forEach((path) => {
      routesList.push(new RouteItem(path, routes[path]));
    });
  }
  let component = null;
  let componentParams = null;
  let props = {};
  const dispatch = createEventDispatcher();
  async function dispatchNextTick(name, detail) {
    await tick();
    dispatch(name, detail);
  }
  let previousScrollState = null;
  let popStateChanged = null;
  if (restoreScrollState) {
    popStateChanged = (event) => {
      if (event.state && event.state.__svelte_spa_router_scrollY) {
        previousScrollState = event.state;
      } else {
        previousScrollState = null;
      }
    };
    window.addEventListener("popstate", popStateChanged);
    afterUpdate(() => {
      if (previousScrollState) {
        window.scrollTo(previousScrollState.__svelte_spa_router_scrollX, previousScrollState.__svelte_spa_router_scrollY);
      } else {
        window.scrollTo(0, 0);
      }
    });
  }
  let lastLoc = null;
  let componentObj = null;
  const unsubscribeLoc = loc.subscribe(async (newLoc) => {
    lastLoc = newLoc;
    let i = 0;
    while (i < routesList.length) {
      const match = routesList[i].match(newLoc.location);
      if (!match) {
        i++;
        continue;
      }
      const detail = {
        route: routesList[i].path,
        location: newLoc.location,
        querystring: newLoc.querystring,
        userData: routesList[i].userData,
        params: match && typeof match == "object" && Object.keys(match).length ? match : null
      };
      if (!await routesList[i].checkConditions(detail)) {
        $$invalidate(0, component = null);
        componentObj = null;
        dispatchNextTick("conditionsFailed", detail);
        return;
      }
      dispatchNextTick("routeLoading", Object.assign({}, detail));
      const obj = routesList[i].component;
      if (componentObj != obj) {
        if (obj.loading) {
          $$invalidate(0, component = obj.loading);
          componentObj = obj;
          $$invalidate(1, componentParams = obj.loadingParams);
          $$invalidate(2, props = {});
          dispatchNextTick("routeLoaded", Object.assign({}, detail, {
            component,
            name: component.name,
            params: componentParams
          }));
        } else {
          $$invalidate(0, component = null);
          componentObj = null;
        }
        const loaded = await obj();
        if (newLoc != lastLoc) {
          return;
        }
        $$invalidate(0, component = loaded && loaded.default || loaded);
        componentObj = obj;
      }
      if (match && typeof match == "object" && Object.keys(match).length) {
        $$invalidate(1, componentParams = match);
      } else {
        $$invalidate(1, componentParams = null);
      }
      $$invalidate(2, props = routesList[i].props);
      dispatchNextTick("routeLoaded", Object.assign({}, detail, {
        component,
        name: component.name,
        params: componentParams
      })).then(() => {
        params.set(componentParams);
      });
      return;
    }
    $$invalidate(0, component = null);
    componentObj = null;
    params.set(void 0);
  });
  onDestroy(() => {
    unsubscribeLoc();
    popStateChanged && window.removeEventListener("popstate", popStateChanged);
  });
  function routeEvent_handler(event) {
    bubble.call(this, $$self, event);
  }
  function routeEvent_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$props2) => {
    if ("routes" in $$props2)
      $$invalidate(3, routes = $$props2.routes);
    if ("prefix" in $$props2)
      $$invalidate(4, prefix = $$props2.prefix);
    if ("restoreScrollState" in $$props2)
      $$invalidate(5, restoreScrollState = $$props2.restoreScrollState);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 32) {
      history.scrollRestoration = restoreScrollState ? "manual" : "auto";
    }
  };
  return [
    component,
    componentParams,
    props,
    routes,
    prefix,
    restoreScrollState,
    routeEvent_handler,
    routeEvent_handler_1
  ];
}
var Router = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {
      routes: 3,
      prefix: 4,
      restoreScrollState: 5
    });
  }
};
var svelte_spa_router_default = Router;

// dist/dist/components/style-guide/colors.svelte.js
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[3] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  return child_ctx;
}
function create_each_block_1(ctx) {
  let li;
  let li_style_value;
  return {
    c() {
      li = element("li");
      attr(li, "style", li_style_value = `background: ${ctx[6]};`);
      attr(li, "class", "svelte-1kxjcm0");
    },
    m(target, anchor) {
      insert(target, li, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(li);
    }
  };
}
function create_each_block(ctx) {
  let ul;
  let t;
  let each_value_1 = ctx[3];
  let each_blocks = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  return {
    c() {
      ul = element("ul");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t = space();
      attr(ul, "class", "color-div svelte-1kxjcm0");
    },
    m(target, anchor) {
      insert(target, ul, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul, null);
      }
      append(ul, t);
    },
    p(ctx2, dirty) {
      if (dirty & 1) {
        each_value_1 = ctx2[3];
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_1(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(ul, t);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_1.length;
      }
    },
    d(detaching) {
      if (detaching)
        detach(ul);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_fragment2(ctx) {
  let div;
  let each_value = ctx[0];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr(div, "class", "section-content svelte-1kxjcm0");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 1) {
        each_value = ctx2[0];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
    }
  };
}
function instance2($$self) {
  "use strict";
  const base = {step: 9, base: 6};
  const colors = {
    gray: Object.assign({hue: 260, saturation: 8}, base),
    red: Object.assign({hue: 360, saturation: 46}, base),
    yellow: Object.assign({hue: 60, saturation: 46}, base),
    green: Object.assign({hue: 120, saturation: 46}, base),
    blue: Object.assign({hue: 220, saturation: 46}, base),
    primary: Object.assign({hue: 260, saturation: 46}, base)
  };
  const colorElements = [];
  for (let colorName in colors) {
    const color = colors[colorName];
    const colorMap = [];
    for (let i = 0; i <= 8; i++) {
      colorMap.push(`hsl(${color.hue}, ${color.saturation}%, ${color.base + i * color.step}%)`);
    }
    colorElements.push(colorMap);
  }
  return [colorElements];
}
var Colors = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance2, create_fragment2, safe_not_equal, {});
  }
};
var colors_svelte_default = Colors;

// dist/dist/components/style-guide/fonts.svelte.js
function get_each_context2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  return child_ctx;
}
function create_dynamic_element(ctx) {
  let svelte_element;
  let svelte_element_levels = [];
  let svelte_element_data = {};
  for (let i = 0; i < svelte_element_levels.length; i += 1) {
    svelte_element_data = assign(svelte_element_data, svelte_element_levels[i]);
  }
  return {
    c() {
      svelte_element = element(ctx[1].tag);
      svelte_element.textContent = `${placeholder} 
    `;
      set_attributes(svelte_element, svelte_element_data);
    },
    m(target, anchor) {
      insert(target, svelte_element, anchor);
    },
    p(ctx2, dirty) {
      set_attributes(svelte_element, svelte_element_data = get_spread_update(svelte_element_levels, []));
    },
    d(detaching) {
      if (detaching)
        detach(svelte_element);
    }
  };
}
function create_each_block2(ctx) {
  let previous_tag = ctx[1].tag;
  let svelte_element_anchor;
  let svelte_element = ctx[1].tag && create_dynamic_element(ctx);
  return {
    c() {
      if (svelte_element)
        svelte_element.c();
      svelte_element_anchor = empty();
    },
    m(target, anchor) {
      if (svelte_element)
        svelte_element.m(target, anchor);
      insert(target, svelte_element_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (ctx2[1].tag) {
        if (!previous_tag) {
          svelte_element = create_dynamic_element(ctx2);
          svelte_element.c();
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else if (safe_not_equal(previous_tag, ctx2[1].tag)) {
          svelte_element.d(1);
          svelte_element = create_dynamic_element(ctx2);
          svelte_element.c();
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else {
          svelte_element.p(ctx2, dirty);
        }
      } else if (previous_tag) {
        svelte_element.d(1);
        svelte_element = null;
      }
      previous_tag = ctx2[1].tag;
    },
    d(detaching) {
      if (detaching)
        detach(svelte_element_anchor);
      if (svelte_element)
        svelte_element.d(detaching);
    }
  };
}
function create_fragment3(ctx) {
  let div;
  let each_value = ctx[0];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block2(get_each_context2(ctx, each_value, i));
  }
  return {
    c() {
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr(div, "class", "section-content svelte-on9thr");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 1) {
        each_value = ctx2[0];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context2(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block2(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
    }
  };
}
var placeholder = "Lorem Ipsum";
function instance3($$self) {
  "use strict";
  const font = {
    base: 14,
    step: 6,
    weights: [200, 400, 700]
  };
  const tags = ["small", "p", "h6", "h5", "h4", "h3", "h2", "h1"];
  const fonts = [];
  for (let i = 0; i <= 7; i++) {
    fonts.push({
      size: `${font.base + font.step * i}px`,
      tag: tags[i]
    });
  }
  return [fonts, font];
}
var Fonts = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance3, create_fragment3, safe_not_equal, {});
  }
};
var fonts_svelte_default = Fonts;

// dist/dist/components/style-guide/weights.svelte.js
function create_fragment4(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      div.innerHTML = `<h1 class="weight-700">Lorem Ipsum</h1> 
  <h1 class="weight-400">Lorem Ipsum</h1> 
  <h1 class="weight-200">Lorem Ipsum</h1>`;
      attr(div, "class", "section-content");
    },
    m(target, anchor) {
      insert(target, div, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
var Weights = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment4, safe_not_equal, {});
  }
};
var weights_svelte_default = Weights;

// dist/dist/components/style-guide/sizes.svelte.js
function get_each_context3(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[2] = list[i];
  return child_ctx;
}
function create_each_block3(ctx) {
  let div;
  let div_style_value;
  return {
    c() {
      div = element("div");
      attr(div, "style", div_style_value = `background: ${ctx[2].color}; width: ${ctx[2].size}px; height: 32px`);
    },
    m(target, anchor) {
      insert(target, div, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_fragment5(ctx) {
  let div;
  let div_style_value;
  let each_value = ctx[1];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block3(get_each_context3(ctx, each_value, i));
  }
  return {
    c() {
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr(div, "class", "section-content");
      attr(div, "style", div_style_value = `display: flex; flex-direction: ${ctx[0]}`);
    },
    m(target, anchor) {
      insert(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 2) {
        each_value = ctx2[1];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context3(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block3(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      if (dirty & 1 && div_style_value !== (div_style_value = `display: flex; flex-direction: ${ctx2[0]}`)) {
        attr(div, "style", div_style_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
    }
  };
}
function instance4($$self, $$props, $$invalidate) {
  let {orientation} = $$props;
  console.log({orientation});
  const size = {step: 9, base: 6};
  const sizes = [];
  for (let i = 0; i <= 8; i++) {
    sizes.push({
      color: `var(--color-gray-${(i + 1) * 100})`,
      size: size.base + size.step * i
    });
  }
  $$self.$$set = ($$props2) => {
    if ("orientation" in $$props2)
      $$invalidate(0, orientation = $$props2.orientation);
  };
  return [orientation, sizes, size];
}
var Sizes = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance4, create_fragment5, safe_not_equal, {orientation: 0});
  }
};
var sizes_svelte_default = Sizes;

// dist/dist/components/style-guide/breakpoint.svelte.js
function create_fragment6(ctx) {
  let div;
  let div_style_value;
  return {
    c() {
      div = element("div");
      attr(div, "style", div_style_value = `width: ${ctx[0]}px; height: 450px; background: var(--color-gray-900);`);
    },
    m(target, anchor) {
      insert(target, div, anchor);
    },
    p(ctx2, [dirty]) {
      if (dirty & 1 && div_style_value !== (div_style_value = `width: ${ctx2[0]}px; height: 450px; background: var(--color-gray-900);`)) {
        attr(div, "style", div_style_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function instance5($$self, $$props, $$invalidate) {
  let {width} = $$props;
  $$self.$$set = ($$props2) => {
    if ("width" in $$props2)
      $$invalidate(0, width = $$props2.width);
  };
  return [width];
}
var Breakpoint = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance5, create_fragment6, safe_not_equal, {width: 0});
  }
};
var breakpoint_svelte_default = Breakpoint;

// dist/dist/pages/style-guide.svelte.js
function create_fragment7(ctx) {
  let main;
  let div1;
  let section0;
  let h10;
  let t1;
  let colors;
  let t2;
  let section1;
  let h11;
  let t4;
  let fonts;
  let t5;
  let section2;
  let h12;
  let t7;
  let weights;
  let t8;
  let section3;
  let h13;
  let t10;
  let sizes0;
  let t11;
  let sizes1;
  let t12;
  let section4;
  let h14;
  let t14;
  let div0;
  let breakpoint0;
  let t15;
  let breakpoint1;
  let t16;
  let breakpoint2;
  let current;
  colors = new colors_svelte_default({});
  fonts = new fonts_svelte_default({});
  weights = new weights_svelte_default({});
  sizes0 = new sizes_svelte_default({props: {orientation: "row"}});
  sizes1 = new sizes_svelte_default({props: {orientation: "column"}});
  breakpoint0 = new breakpoint_svelte_default({props: {width: 428}});
  breakpoint1 = new breakpoint_svelte_default({props: {width: 744}});
  breakpoint2 = new breakpoint_svelte_default({props: {width: 1440}});
  return {
    c() {
      main = element("main");
      div1 = element("div");
      section0 = element("section");
      h10 = element("h1");
      h10.textContent = "Colors";
      t1 = space();
      create_component(colors.$$.fragment);
      t2 = space();
      section1 = element("section");
      h11 = element("h1");
      h11.textContent = "Fonts";
      t4 = space();
      create_component(fonts.$$.fragment);
      t5 = space();
      section2 = element("section");
      h12 = element("h1");
      h12.textContent = "Weights";
      t7 = space();
      create_component(weights.$$.fragment);
      t8 = space();
      section3 = element("section");
      h13 = element("h1");
      h13.textContent = "Sizes";
      t10 = space();
      create_component(sizes0.$$.fragment);
      t11 = space();
      create_component(sizes1.$$.fragment);
      t12 = space();
      section4 = element("section");
      h14 = element("h1");
      h14.textContent = "Breakpoints";
      t14 = space();
      div0 = element("div");
      create_component(breakpoint0.$$.fragment);
      t15 = space();
      create_component(breakpoint1.$$.fragment);
      t16 = space();
      create_component(breakpoint2.$$.fragment);
      attr(section0, "class", "svelte-aasygx");
      attr(section1, "class", "svelte-aasygx");
      attr(section2, "class", "svelte-aasygx");
      attr(section3, "class", "svelte-aasygx");
      attr(div0, "class", "breakpoints-container svelte-aasygx");
      attr(section4, "class", "svelte-aasygx");
      attr(div1, "class", "content svelte-aasygx");
      attr(main, "class", "svelte-aasygx");
    },
    m(target, anchor) {
      insert(target, main, anchor);
      append(main, div1);
      append(div1, section0);
      append(section0, h10);
      append(section0, t1);
      mount_component(colors, section0, null);
      append(div1, t2);
      append(div1, section1);
      append(section1, h11);
      append(section1, t4);
      mount_component(fonts, section1, null);
      append(div1, t5);
      append(div1, section2);
      append(section2, h12);
      append(section2, t7);
      mount_component(weights, section2, null);
      append(div1, t8);
      append(div1, section3);
      append(section3, h13);
      append(section3, t10);
      mount_component(sizes0, section3, null);
      append(section3, t11);
      mount_component(sizes1, section3, null);
      append(div1, t12);
      append(div1, section4);
      append(section4, h14);
      append(section4, t14);
      append(section4, div0);
      mount_component(breakpoint0, div0, null);
      append(div0, t15);
      mount_component(breakpoint1, div0, null);
      append(div0, t16);
      mount_component(breakpoint2, div0, null);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(colors.$$.fragment, local);
      transition_in(fonts.$$.fragment, local);
      transition_in(weights.$$.fragment, local);
      transition_in(sizes0.$$.fragment, local);
      transition_in(sizes1.$$.fragment, local);
      transition_in(breakpoint0.$$.fragment, local);
      transition_in(breakpoint1.$$.fragment, local);
      transition_in(breakpoint2.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(colors.$$.fragment, local);
      transition_out(fonts.$$.fragment, local);
      transition_out(weights.$$.fragment, local);
      transition_out(sizes0.$$.fragment, local);
      transition_out(sizes1.$$.fragment, local);
      transition_out(breakpoint0.$$.fragment, local);
      transition_out(breakpoint1.$$.fragment, local);
      transition_out(breakpoint2.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(main);
      destroy_component(colors);
      destroy_component(fonts);
      destroy_component(weights);
      destroy_component(sizes0);
      destroy_component(sizes1);
      destroy_component(breakpoint0);
      destroy_component(breakpoint1);
      destroy_component(breakpoint2);
    }
  };
}
var Style_guide = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment7, safe_not_equal, {});
  }
};
var style_guide_svelte_default = Style_guide;

// dist/dist/pages/not-found.svelte.js
function create_fragment8(ctx) {
  let h1;
  return {
    c() {
      h1 = element("h1");
      h1.textContent = "burh";
    },
    m(target, anchor) {
      insert(target, h1, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(h1);
    }
  };
}
var Not_found = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment8, safe_not_equal, {});
  }
};
var not_found_svelte_default = Not_found;

// dist/dist/router.svelte.js
function create_fragment20(ctx) {
  let router;
  let current;
  router = new svelte_spa_router_default({props: {routes: ctx[0]}});
  return {
    c() {
      create_component(router.$$.fragment);
    },
    m(target, anchor) {
      mount_component(router, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(router.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(router.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(router, detaching);
    }
  };
}

// dist/dist/components/heading.svelte.js
function create_dynamic_element2(ctx) {
  let svelte_element;
  let t0;
  let t1;
  let svelte_element_class_value;
  let current;
  const default_slot_template = ctx[4].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[3], null);
  let svelte_element_levels = [
    {
      class: svelte_element_class_value = "" + (null_to_empty(`variant-${ctx[0]}`) + " svelte-1961nor")
    }
  ];
  let svelte_element_data = {};
  for (let i = 0; i < svelte_element_levels.length; i += 1) {
    svelte_element_data = assign(svelte_element_data, svelte_element_levels[i]);
  }
  return {
    c() {
      svelte_element = element(ctx[2]);
      if (default_slot)
        default_slot.c();
      t0 = space();
      t1 = text(ctx[1]);
      set_attributes(svelte_element, svelte_element_data);
    },
    m(target, anchor) {
      insert(target, svelte_element, anchor);
      if (default_slot) {
        default_slot.m(svelte_element, null);
      }
      append(svelte_element, t0);
      append(svelte_element, t1);
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 8)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[3], !current ? get_all_dirty_from_scope(ctx2[3]) : get_slot_changes(default_slot_template, ctx2[3], dirty, null), null);
        }
      }
      if (!current || dirty & 2)
        set_data(t1, ctx2[1]);
      set_attributes(svelte_element, svelte_element_data = get_spread_update(svelte_element_levels, [
        (!current || dirty & 1 && svelte_element_class_value !== (svelte_element_class_value = "" + (null_to_empty(`variant-${ctx2[0]}`) + " svelte-1961nor"))) && {class: svelte_element_class_value}
      ]));
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(svelte_element);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_fragment9(ctx) {
  let previous_tag = ctx[2];
  let svelte_element_anchor;
  let current;
  let svelte_element = ctx[2] && create_dynamic_element2(ctx);
  return {
    c() {
      if (svelte_element)
        svelte_element.c();
      svelte_element_anchor = empty();
    },
    m(target, anchor) {
      if (svelte_element)
        svelte_element.m(target, anchor);
      insert(target, svelte_element_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (ctx2[2]) {
        if (!previous_tag) {
          svelte_element = create_dynamic_element2(ctx2);
          svelte_element.c();
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else if (safe_not_equal(previous_tag, ctx2[2])) {
          svelte_element.d(1);
          svelte_element = create_dynamic_element2(ctx2);
          svelte_element.c();
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else {
          svelte_element.p(ctx2, dirty);
        }
      } else if (previous_tag) {
        svelte_element.d(1);
        svelte_element = null;
      }
      previous_tag = ctx2[2];
    },
    i(local) {
      if (current)
        return;
      transition_in(svelte_element);
      current = true;
    },
    o(local) {
      transition_out(svelte_element);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(svelte_element_anchor);
      if (svelte_element)
        svelte_element.d(detaching);
    }
  };
}
function instance6($$self, $$props, $$invalidate) {
  let {$$slots: slots = {}, $$scope} = $$props;
  let {variant} = $$props;
  let {label = ""} = $$props;
  let element2;
  switch (variant) {
    case "title": {
      element2 = "h1";
      break;
    }
    case "subtitle": {
      element2 = "h4";
      break;
    }
    case "suptitle": {
      element2 = "h5";
      break;
    }
    case "paragraph": {
      element2 = "p";
      break;
    }
  }
  $$self.$$set = ($$props2) => {
    if ("variant" in $$props2)
      $$invalidate(0, variant = $$props2.variant);
    if ("label" in $$props2)
      $$invalidate(1, label = $$props2.label);
    if ("$$scope" in $$props2)
      $$invalidate(3, $$scope = $$props2.$$scope);
  };
  return [variant, label, element2, $$scope, slots];
}
var Heading = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance6, create_fragment9, safe_not_equal, {variant: 0, label: 1});
  }
};
var heading_svelte_default = Heading;

// dist/_snowpack/pkg/nanoid.js
var nanoid = (size = 21) => crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
  byte &= 63;
  if (byte < 36) {
    id += byte.toString(36);
  } else if (byte < 62) {
    id += (byte - 26).toString(36).toUpperCase();
  } else if (byte > 62) {
    id += "-";
  } else {
    id += "_";
  }
  return id;
}, "");

// dist/dist/components/input/assets/eye.svelte.js
function create_fragment10(ctx) {
  let svg;
  let path0;
  let path1;
  return {
    c() {
      svg = svg_element("svg");
      path0 = svg_element("path");
      path1 = svg_element("path");
      attr(path0, "d", "M1.5 12C1.5 12 5.5 4 12.5 4C19.5 4 23.5 12 23.5 12C23.5 12 19.5 20 12.5 20C5.5 20 1.5 12 1.5 12Z");
      attr(path0, "stroke", "#9691A1");
      attr(path0, "stroke-width", "2");
      attr(path0, "stroke-linecap", "round");
      attr(path0, "stroke-linejoin", "round");
      attr(path1, "d", "M12.5 15C14.1569 15 15.5 13.6569 15.5 12C15.5 10.3431 14.1569 9 12.5 9C10.8431 9 9.5 10.3431 9.5 12C9.5 13.6569 10.8431 15 12.5 15Z");
      attr(path1, "stroke", "#9691A1");
      attr(path1, "stroke-width", "2");
      attr(path1, "stroke-linecap", "round");
      attr(path1, "stroke-linejoin", "round");
      attr(svg, "width", "25");
      attr(svg, "height", "24");
      attr(svg, "viewBox", "0 0 25 24");
      attr(svg, "fill", "none");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, path0);
      append(svg, path1);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
var Eye = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment10, safe_not_equal, {});
  }
};
var eye_svelte_default = Eye;

// dist/dist/components/input/field.svelte.js
function create_if_block2(ctx) {
  let button;
  let eye;
  let current;
  let mounted;
  let dispose;
  eye = new eye_svelte_default({});
  return {
    c() {
      button = element("button");
      create_component(eye.$$.fragment);
      attr(button, "class", "magic-eye svelte-ii8160");
    },
    m(target, anchor) {
      insert(target, button, anchor);
      mount_component(eye, button, null);
      current = true;
      if (!mounted) {
        dispose = listen(button, "click", ctx[16]);
        mounted = true;
      }
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(eye.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(eye.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(button);
      destroy_component(eye);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment11(ctx) {
  let div1;
  let label_1;
  let t0;
  let t1;
  let div0;
  let input;
  let t2;
  let t3;
  let span;
  let t4;
  let t5_value = ctx[3].message + "";
  let t5;
  let div1_class_value;
  let div1_data_errored_value;
  let current;
  let mounted;
  let dispose;
  let if_block = ctx[12] === "password" && create_if_block2(ctx);
  return {
    c() {
      div1 = element("div");
      label_1 = element("label");
      t0 = text(ctx[5]);
      t1 = space();
      div0 = element("div");
      input = element("input");
      t2 = space();
      if (if_block)
        if_block.c();
      t3 = space();
      span = element("span");
      t4 = text("* ");
      t5 = text(t5_value);
      attr(label_1, "class", "italic svelte-ii8160");
      attr(label_1, "for", ctx[8]);
      attr(input, "id", ctx[8]);
      attr(input, "type", ctx[0]);
      attr(input, "placeholder", ctx[6]);
      input.disabled = ctx[7];
      attr(input, "class", "svelte-ii8160");
      attr(div0, "class", "input-inner-wrapper svelte-ii8160");
      attr(span, "class", "error italic svelte-ii8160");
      attr(div1, "class", div1_class_value = "" + (null_to_empty(`input-wrapper variant-${ctx[4]}`) + " svelte-ii8160"));
      attr(div1, "data-focused", ctx[1]);
      attr(div1, "data-errored", div1_data_errored_value = !!ctx[3].message);
      attr(div1, "data-success", ctx[2]);
      attr(div1, "data-disabled", ctx[7]);
    },
    m(target, anchor) {
      insert(target, div1, anchor);
      append(div1, label_1);
      append(label_1, t0);
      append(div1, t1);
      append(div1, div0);
      append(div0, input);
      append(div0, t2);
      if (if_block)
        if_block.m(div0, null);
      append(div1, t3);
      append(div1, span);
      append(span, t4);
      append(span, t5);
      current = true;
      if (!mounted) {
        dispose = [
          listen(input, "focus", ctx[9]),
          listen(input, "blur", ctx[10]),
          listen(input, "input", ctx[11])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (!current || dirty & 32)
        set_data(t0, ctx2[5]);
      if (!current || dirty & 1) {
        attr(input, "type", ctx2[0]);
      }
      if (!current || dirty & 64) {
        attr(input, "placeholder", ctx2[6]);
      }
      if (!current || dirty & 128) {
        input.disabled = ctx2[7];
      }
      if (ctx2[12] === "password")
        if_block.p(ctx2, dirty);
      if ((!current || dirty & 8) && t5_value !== (t5_value = ctx2[3].message + ""))
        set_data(t5, t5_value);
      if (!current || dirty & 16 && div1_class_value !== (div1_class_value = "" + (null_to_empty(`input-wrapper variant-${ctx2[4]}`) + " svelte-ii8160"))) {
        attr(div1, "class", div1_class_value);
      }
      if (!current || dirty & 2) {
        attr(div1, "data-focused", ctx2[1]);
      }
      if (!current || dirty & 8 && div1_data_errored_value !== (div1_data_errored_value = !!ctx2[3].message)) {
        attr(div1, "data-errored", div1_data_errored_value);
      }
      if (!current || dirty & 4) {
        attr(div1, "data-success", ctx2[2]);
      }
      if (!current || dirty & 128) {
        attr(div1, "data-disabled", ctx2[7]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      if (if_block)
        if_block.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance7($$self, $$props, $$invalidate) {
  const dispatch = createEventDispatcher();
  let {variant} = $$props;
  let {label} = $$props;
  let {placeholder: placeholder2} = $$props;
  let {disabled = false} = $$props;
  let {type = "text"} = $$props;
  let {value = ""} = $$props;
  let {focused = false} = $$props;
  let {success = false} = $$props;
  const id = nanoid(6);
  let {error = {message: ""}} = $$props;
  function setError({message}) {
    $$invalidate(3, error.message = message, error);
  }
  function setSuccess() {
    $$invalidate(2, success = true);
  }
  function handleFocus(event) {
    $$invalidate(2, success = false);
    $$invalidate(3, error.message = "", error);
    $$invalidate(1, focused = true);
    dispatch("focus", event);
  }
  function handleBlur() {
    $$invalidate(2, success = false);
    $$invalidate(3, error.message = "", error);
    $$invalidate(1, focused = false);
    dispatch("blur");
  }
  function handleInput(event) {
    $$invalidate(13, value = event.target.value);
  }
  let originalType = type;
  const click_handler = () => type === "password" ? $$invalidate(0, type = "text") : $$invalidate(0, type = "password");
  $$self.$$set = ($$props2) => {
    if ("variant" in $$props2)
      $$invalidate(4, variant = $$props2.variant);
    if ("label" in $$props2)
      $$invalidate(5, label = $$props2.label);
    if ("placeholder" in $$props2)
      $$invalidate(6, placeholder2 = $$props2.placeholder);
    if ("disabled" in $$props2)
      $$invalidate(7, disabled = $$props2.disabled);
    if ("type" in $$props2)
      $$invalidate(0, type = $$props2.type);
    if ("value" in $$props2)
      $$invalidate(13, value = $$props2.value);
    if ("focused" in $$props2)
      $$invalidate(1, focused = $$props2.focused);
    if ("success" in $$props2)
      $$invalidate(2, success = $$props2.success);
    if ("error" in $$props2)
      $$invalidate(3, error = $$props2.error);
  };
  return [
    type,
    focused,
    success,
    error,
    variant,
    label,
    placeholder2,
    disabled,
    id,
    handleFocus,
    handleBlur,
    handleInput,
    originalType,
    value,
    setError,
    setSuccess,
    click_handler
  ];
}
var Field = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance7, create_fragment11, safe_not_equal, {
      variant: 4,
      label: 5,
      placeholder: 6,
      disabled: 7,
      type: 0,
      value: 13,
      focused: 1,
      success: 2,
      error: 3,
      setError: 14,
      setSuccess: 15
    });
  }
  get setError() {
    return this.$$.ctx[14];
  }
  get setSuccess() {
    return this.$$.ctx[15];
  }
};
var field_svelte_default = Field;

// dist/dist/components/input/checkbox.svelte.js
function create_fragment12(ctx) {
  let button;
  let div;
  let mounted;
  let dispose;
  return {
    c() {
      button = element("button");
      div = element("div");
      attr(div, "class", "box svelte-45k4mn");
      attr(button, "aria-roledescription", "toggle");
      attr(button, "data-checked", ctx[0]);
      attr(button, "class", "svelte-45k4mn");
    },
    m(target, anchor) {
      insert(target, button, anchor);
      append(button, div);
      if (!mounted) {
        dispose = listen(button, "click", ctx[1]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 1) {
        attr(button, "data-checked", ctx2[0]);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(button);
      mounted = false;
      dispose();
    }
  };
}
function instance8($$self, $$props, $$invalidate) {
  const dispatch = createEventDispatcher();
  let {checked = false} = $$props;
  function handleClick() {
    $$invalidate(0, checked = !checked);
    dispatch("click", {value: checked});
  }
  $$self.$$set = ($$props2) => {
    if ("checked" in $$props2)
      $$invalidate(0, checked = $$props2.checked);
  };
  return [checked, handleClick];
}
var Checkbox = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance8, create_fragment12, safe_not_equal, {checked: 0});
  }
};
var checkbox_svelte_default = Checkbox;

// dist/dist/components/link.svelte.js
function create_fragment13(ctx) {
  let a;
  let t;
  let link_action;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[4].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[3], null);
  return {
    c() {
      a = element("a");
      if (default_slot)
        default_slot.c();
      t = text(ctx[1]);
      attr(a, "data-active", ctx[2]);
      attr(a, "href", ctx[0]);
      attr(a, "class", "svelte-17g440e");
    },
    m(target, anchor) {
      insert(target, a, anchor);
      if (default_slot) {
        default_slot.m(a, null);
      }
      append(a, t);
      current = true;
      if (!mounted) {
        dispose = action_destroyer(link_action = link.call(null, a));
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 8)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[3], !current ? get_all_dirty_from_scope(ctx2[3]) : get_slot_changes(default_slot_template, ctx2[3], dirty, null), null);
        }
      }
      if (!current || dirty & 2)
        set_data(t, ctx2[1]);
      if (!current || dirty & 4) {
        attr(a, "data-active", ctx2[2]);
      }
      if (!current || dirty & 1) {
        attr(a, "href", ctx2[0]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(a);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
}
function instance9($$self, $$props, $$invalidate) {
  let {$$slots: slots = {}, $$scope} = $$props;
  let {href} = $$props;
  let {label = ""} = $$props;
  let {active = false} = $$props;
  $$self.$$set = ($$props2) => {
    if ("href" in $$props2)
      $$invalidate(0, href = $$props2.href);
    if ("label" in $$props2)
      $$invalidate(1, label = $$props2.label);
    if ("active" in $$props2)
      $$invalidate(2, active = $$props2.active);
    if ("$$scope" in $$props2)
      $$invalidate(3, $$scope = $$props2.$$scope);
  };
  return [href, label, active, $$scope, slots];
}
var Link = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance9, create_fragment13, safe_not_equal, {href: 0, label: 1, active: 2});
  }
};
var link_svelte_default = Link;

// dist/@password-generator/core/src/lib/generate-random-number.js
var generateRandomNumber = ({
  min,
  max
}) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// dist/dist/components/button/neo-expertise-x.svelte.js
function create_fragment14(ctx) {
  let svg;
  let path;
  return {
    c() {
      svg = svg_element("svg");
      path = svg_element("path");
      attr(path, "d", "M13.9788 8.75404L16.9171 5.62823C17.2938 5.22749 17.2938 4.57172 16.9171 4.17098L14.1775 1.25647C13.8008 0.855721 13.1843 0.855721 12.8076 1.25647L9.86938 4.38228C9.78034 4.477 9.72555 4.60815 9.7324 4.74659L9.73239 8.38973C9.73239 8.68118 9.94472 8.90706 10.2187 8.90706L13.6432 8.90706C13.7665 8.90706 13.8829 8.85605 13.9788 8.75404V8.75404ZM7.52699 4.38228L4.58872 1.25647C4.21202 0.855721 3.5956 0.855721 3.2189 1.25647L0.479261 4.17098C0.102561 4.57172 0.102561 5.22749 0.479261 5.62823L3.41753 8.75404C3.50656 8.84877 3.62985 8.90706 3.75998 8.89977L7.18453 8.89977C7.45849 8.89977 7.67082 8.6739 7.67082 8.38245L7.67082 4.73931C7.67082 4.60815 7.62287 4.48429 7.52699 4.38228ZM3.41753 11.246L0.479261 14.3718C0.102561 14.7725 0.102561 15.4283 0.479261 15.829L3.2189 18.7435C3.5956 19.1443 4.21202 19.1443 4.58872 18.7435L7.52699 15.6177C7.61602 15.523 7.67082 15.3918 7.66397 15.2534L7.66397 11.6103C7.66397 11.3188 7.45165 11.0929 7.17768 11.0929L3.75313 11.0929C3.62985 11.0929 3.51341 11.1439 3.41753 11.246ZM13.6295 11.0929H10.205C9.93102 11.0929 9.7187 11.3188 9.7187 11.6103V15.2534C9.7187 15.3846 9.76664 15.523 9.85568 15.6177L12.8008 18.7508C13.1775 19.1516 13.7939 19.1516 14.1706 18.7508L16.9103 15.8363C17.287 15.4356 17.287 14.7798 16.9103 14.3791L13.972 11.2532C13.8829 11.1439 13.7665 11.0929 13.6295 11.0929V11.0929Z");
      attr(path, "fill", "#C5C2CB");
      attr(svg, "width", "18");
      attr(svg, "height", "20");
      attr(svg, "viewBox", "0 0 18 20");
      attr(svg, "fill", "none");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, path);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
var Neo_expertise_x = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment14, safe_not_equal, {});
  }
};
var neo_expertise_x_svelte_default = Neo_expertise_x;

// dist/dist/components/button/index.svelte.js
function create_if_block_1(ctx) {
  let neoexpertisex;
  let current;
  neoexpertisex = new neo_expertise_x_svelte_default({});
  return {
    c() {
      create_component(neoexpertisex.$$.fragment);
    },
    m(target, anchor) {
      mount_component(neoexpertisex, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(neoexpertisex.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(neoexpertisex.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(neoexpertisex, detaching);
    }
  };
}
function create_if_block3(ctx) {
  let svg;
  let path;
  let defs;
  let radialGradient0;
  let stop0;
  let stop0_stop_color_value;
  let stop1;
  let stop1_stop_color_value;
  let radialGradient1;
  let stop2;
  let stop2_stop_color_value;
  let stop3;
  let stop3_stop_color_value;
  let t;
  let audio;
  let audio_src_value;
  return {
    c() {
      svg = svg_element("svg");
      path = svg_element("path");
      defs = svg_element("defs");
      radialGradient0 = svg_element("radialGradient");
      stop0 = svg_element("stop");
      stop1 = svg_element("stop");
      radialGradient1 = svg_element("radialGradient");
      stop2 = svg_element("stop");
      stop3 = svg_element("stop");
      t = space();
      audio = element("audio");
      attr(path, "d", "M25.9372 16.5079C25.6684 18.3892 24.9163 20.1722 23.75 21.6806C22.4721 23.3335 20.7498 24.5882 18.7847 25.298C16.8196 26.0078 14.693 26.1433 12.6538 25.6886C10.6145 25.2339 8.74694 24.2078 7.26956 22.7304C5.79217 21.2531 4.7661 19.3855 4.31139 17.3462C3.85669 15.307 3.99216 13.1804 4.70195 11.2153C5.41175 9.25023 6.66652 7.52794 8.31943 6.24997C9.82781 5.08375 11.6108 4.33155 13.4921 4.06281C12.4287 5.7067 11.9275 7.65775 12.0739 9.62036C12.2342 11.77 13.1607 13.7908 14.685 15.315C16.2092 16.8393 18.23 17.7658 20.3796 17.9261C22.3423 18.0725 24.2933 17.5713 25.9372 16.5079Z");
      attr(path, "fill", "url(#paint0_radial_78_178)");
      attr(path, "stroke", "url(#paint1_radial_78_178)");
      attr(path, "stroke-width", "0.5");
      attr(path, "stroke-linecap", "round");
      attr(stop0, "stop-color", stop0_stop_color_value = ctx[4].startFillGradient);
      attr(stop1, "stop-color", stop1_stop_color_value = ctx[4].endFillGradient);
      attr(stop1, "offset", "1");
      attr(radialGradient0, "id", "paint0_radial_78_178");
      attr(radialGradient0, "cx", "0");
      attr(radialGradient0, "cy", "0");
      attr(radialGradient0, "r", "1");
      attr(radialGradient0, "gradientUnits", "userSpaceOnUse");
      attr(radialGradient0, "gradientTransform", "translate(18.125 11.875) rotate(135) scale(18.5616)");
      attr(stop2, "offset", "0.244632");
      attr(stop2, "stop-color", stop2_stop_color_value = ctx[4].startStrokeGradient);
      attr(stop3, "offset", "0.84375");
      attr(stop3, "stop-color", stop3_stop_color_value = ctx[4].endStrokeGradient);
      attr(radialGradient1, "id", "paint1_radial_78_178");
      attr(radialGradient1, "cx", "0");
      attr(radialGradient1, "cy", "0");
      attr(radialGradient1, "r", "1");
      attr(radialGradient1, "gradientUnits", "userSpaceOnUse");
      attr(radialGradient1, "gradientTransform", "translate(20.6643 9.33566) rotate(135) scale(24.4768)");
      attr(svg, "width", "20");
      attr(svg, "height", "20");
      attr(svg, "viewBox", "0 0 30 30");
      attr(svg, "fill", "none");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      if (!src_url_equal(audio.src, audio_src_value = "/switching-effect.mp3"))
        attr(audio, "src", audio_src_value);
      attr(audio, "id", "moon-knight-switch");
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, path);
      append(svg, defs);
      append(defs, radialGradient0);
      append(radialGradient0, stop0);
      append(radialGradient0, stop1);
      append(defs, radialGradient1);
      append(radialGradient1, stop2);
      append(radialGradient1, stop3);
      insert(target, t, anchor);
      insert(target, audio, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 16 && stop0_stop_color_value !== (stop0_stop_color_value = ctx2[4].startFillGradient)) {
        attr(stop0, "stop-color", stop0_stop_color_value);
      }
      if (dirty & 16 && stop1_stop_color_value !== (stop1_stop_color_value = ctx2[4].endFillGradient)) {
        attr(stop1, "stop-color", stop1_stop_color_value);
      }
      if (dirty & 16 && stop2_stop_color_value !== (stop2_stop_color_value = ctx2[4].startStrokeGradient)) {
        attr(stop2, "stop-color", stop2_stop_color_value);
      }
      if (dirty & 16 && stop3_stop_color_value !== (stop3_stop_color_value = ctx2[4].endStrokeGradient)) {
        attr(stop3, "stop-color", stop3_stop_color_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(svg);
      if (detaching)
        detach(t);
      if (detaching)
        detach(audio);
    }
  };
}
function create_fragment15(ctx) {
  let button;
  let t0;
  let t1;
  let t2;
  let button_class_value;
  let current;
  let mounted;
  let dispose;
  let if_block0 = ctx[0] === "NeoExpertise" && create_if_block_1(ctx);
  const default_slot_template = ctx[7].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[6], null);
  let if_block1 = ctx[0] === "MoonKnight" && create_if_block3(ctx);
  return {
    c() {
      button = element("button");
      if (if_block0)
        if_block0.c();
      t0 = space();
      if (default_slot)
        default_slot.c();
      t1 = text(ctx[1]);
      t2 = space();
      if (if_block1)
        if_block1.c();
      attr(button, "class", button_class_value = "" + (null_to_empty(`variant-${ctx[0]} ${ctx[0] === "MoonKnight" && `personality-${ctx[3]}`} ${ctx[2]}`) + " svelte-1khsx65"));
    },
    m(target, anchor) {
      insert(target, button, anchor);
      if (if_block0)
        if_block0.m(button, null);
      append(button, t0);
      if (default_slot) {
        default_slot.m(button, null);
      }
      append(button, t1);
      append(button, t2);
      if (if_block1)
        if_block1.m(button, null);
      current = true;
      if (!mounted) {
        dispose = listen(button, "click", ctx[5]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (ctx2[0] === "NeoExpertise") {
        if (if_block0) {
          if (dirty & 1) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_1(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(button, t0);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 64)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[6], !current ? get_all_dirty_from_scope(ctx2[6]) : get_slot_changes(default_slot_template, ctx2[6], dirty, null), null);
        }
      }
      if (!current || dirty & 2)
        set_data(t1, ctx2[1]);
      if (ctx2[0] === "MoonKnight") {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block3(ctx2);
          if_block1.c();
          if_block1.m(button, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (!current || dirty & 13 && button_class_value !== (button_class_value = "" + (null_to_empty(`variant-${ctx2[0]} ${ctx2[0] === "MoonKnight" && `personality-${ctx2[3]}`} ${ctx2[2]}`) + " svelte-1khsx65"))) {
        attr(button, "class", button_class_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(button);
      if (if_block0)
        if_block0.d();
      if (default_slot)
        default_slot.d(detaching);
      if (if_block1)
        if_block1.d();
      mounted = false;
      dispose();
    }
  };
}
function MoonKnightSwitchAnimation(callback) {
  const blackPanel = document.createElement("div");
  blackPanel.style.width = "100vw";
  blackPanel.style.height = "100vh";
  blackPanel.style.position = "absolute";
  blackPanel.style.top = "0px";
  blackPanel.style.left = "0px";
  blackPanel.style.right = "0px";
  blackPanel.style.bottom = "0px";
  document.body.style.overflow = "hidden";
  document.body.appendChild(blackPanel);
  const switchAudio = document.querySelector("#moon-knight-switch");
  console.log(switchAudio.duration);
  switchAudio.currentTime = 1;
  switchAudio.onload = () => {
    console.log("carregou porra");
  };
  switchAudio.play();
  setTimeout(() => {
    blackPanel.style.background = "#000000";
    setTimeout(() => {
      blackPanel.style.background = "transparent";
      setTimeout(() => {
        blackPanel.style.background = "#000000";
        setTimeout(() => {
          blackPanel.style.background = "transparent";
          setTimeout(() => {
            blackPanel.style.background = "#000000";
            setTimeout(() => {
              blackPanel.style.background = "transparent";
              setTimeout(() => {
                blackPanel.style.background = "#000000";
                setTimeout(() => {
                  blackPanel.style.background = "transparent";
                  setTimeout(() => {
                    blackPanel.style.background = "#000000";
                    setTimeout(() => {
                      blackPanel.style.background = "transparent";
                      setTimeout(() => {
                        blackPanel.style.background = "#000000";
                        setTimeout(() => {
                          blackPanel.style.background = "transparent";
                          setTimeout(() => {
                            callback();
                            document.body.removeChild(blackPanel);
                            document.body.style.overflow = "auto";
                            const manWithoutLove = new Audio("/man-without-love.mp3");
                            manWithoutLove.play();
                          }, 500);
                        }, 130);
                      }, 66);
                    }, 100);
                  }, 33);
                }, 66);
              }, 133);
            }, 100);
          }, 100);
        }, 60);
      }, 200);
    }, 100);
  }, 600);
}
function instance10($$self, $$props, $$invalidate) {
  let {$$slots: slots = {}, $$scope} = $$props;
  const dispatch = createEventDispatcher();
  let {variant} = $$props;
  let {label = ""} = $$props;
  let {classname = ""} = $$props;
  let personality;
  const colors = {
    startFillGradient: "hsl(260, 8%, 78%)",
    endFillGradient: "hsl(260, 8%, 30%)",
    startStrokeGradient: "hsl(260, 8%, 30%)",
    endStrokeGradient: "hsl(260, 8%, 70%)"
  };
  function handleClick() {
    if (variant === "MoonKnight") {
      MoonKnightSwitchAnimation(() => {
        const RNG = generateRandomNumber({min: 0, max: 1});
        if (!!RNG) {
          $$invalidate(4, colors.startFillGradient = "hsl(215, 71%, 45%)", colors);
          $$invalidate(4, colors.endFillGradient = "hsl(215, 71%, 3%)", colors);
          $$invalidate(4, colors.startStrokeGradient = "hsl(215, 71%, 45%)", colors);
          $$invalidate(4, colors.endStrokeGradient = "hsl(200, 80%, 15%)", colors);
          $$invalidate(3, personality = "marc");
        } else {
          $$invalidate(4, colors.startFillGradient = "#515151", colors);
          $$invalidate(4, colors.endFillGradient = "#000000", colors);
          $$invalidate(4, colors.startStrokeGradient = "#ADADAD", colors);
          $$invalidate(4, colors.endStrokeGradient = "#383838", colors);
          $$invalidate(3, personality = "jake");
        }
      });
    }
    dispatch("click");
  }
  $$self.$$set = ($$props2) => {
    if ("variant" in $$props2)
      $$invalidate(0, variant = $$props2.variant);
    if ("label" in $$props2)
      $$invalidate(1, label = $$props2.label);
    if ("classname" in $$props2)
      $$invalidate(2, classname = $$props2.classname);
    if ("$$scope" in $$props2)
      $$invalidate(6, $$scope = $$props2.$$scope);
  };
  return [variant, label, classname, personality, colors, handleClick, $$scope, slots];
}
var Button = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance10, create_fragment15, safe_not_equal, {variant: 0, label: 1, classname: 2});
  }
};
var index_svelte_default = Button;

// dist/dist/components/footer/assets/flag.svelte.js
function create_fragment16(ctx) {
  let svg;
  let path0;
  let path1;
  return {
    c() {
      svg = svg_element("svg");
      path0 = svg_element("path");
      path1 = svg_element("path");
      attr(path0, "d", "M1.66663 6.24998C1.66663 6.24998 2.08329 5.83331 3.33329 5.83331C4.58329 5.83331 5.41663 6.66665 6.66663 6.66665C7.91663 6.66665 8.33329 6.24998 8.33329 6.24998V1.24998C8.33329 1.24998 7.91663 1.66665 6.66663 1.66665C5.41663 1.66665 4.58329 0.833313 3.33329 0.833313C2.08329 0.833313 1.66663 1.24998 1.66663 1.24998V6.24998Z");
      attr(path0, "stroke", "#C5C2CB");
      attr(path0, "stroke-linecap", "round");
      attr(path0, "stroke-linejoin", "round");
      attr(path1, "d", "M1.66663 9.16667V6.25");
      attr(path1, "stroke", "#C5C2CB");
      attr(path1, "stroke-linecap", "round");
      attr(path1, "stroke-linejoin", "round");
      attr(svg, "width", "10");
      attr(svg, "height", "10");
      attr(svg, "viewBox", "0 0 10 10");
      attr(svg, "fill", "none");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, path0);
      append(svg, path1);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
var Flag = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment16, safe_not_equal, {});
  }
};
var flag_svelte_default = Flag;

// dist/dist/components/footer/assets/github.svelte.js
function create_fragment17(ctx) {
  let svg;
  let g;
  let path;
  let defs;
  let clipPath;
  let rect;
  return {
    c() {
      svg = svg_element("svg");
      g = svg_element("g");
      path = svg_element("path");
      defs = svg_element("defs");
      clipPath = svg_element("clipPath");
      rect = svg_element("rect");
      attr(path, "d", "M6.83333 9.76116V8.14866C6.84896 7.94998 6.82212 7.75025 6.75459 7.56274C6.68706 7.37524 6.58039 7.20426 6.44167 7.06116C7.75 6.91533 9.125 6.4195 9.125 4.1445C9.12489 3.56276 8.90112 3.00333 8.5 2.582C8.68994 2.07304 8.67651 1.51048 8.4625 1.01116C8.4625 1.01116 7.97083 0.86533 6.83333 1.62783C5.87834 1.36901 4.87166 1.36901 3.91667 1.62783C2.77917 0.86533 2.2875 1.01116 2.2875 1.01116C2.07349 1.51048 2.06006 2.07304 2.25 2.582C1.84589 3.00646 1.62188 3.57094 1.625 4.157C1.625 6.41533 3 6.91116 4.30833 7.07366C4.17125 7.21532 4.06553 7.38425 3.99805 7.56946C3.93056 7.75468 3.90284 7.95202 3.91667 8.14866V9.76116M3.91667 8.51116C1.83333 9.13616 1.83333 7.4695 1 7.26116L3.91667 8.51116Z");
      attr(path, "stroke", "#C5C2CB");
      attr(path, "stroke-linecap", "round");
      attr(path, "stroke-linejoin", "round");
      attr(g, "clip-path", "url(#clip0_11_265)");
      attr(rect, "width", "10");
      attr(rect, "height", "10");
      attr(rect, "fill", "white");
      attr(clipPath, "id", "clip0_11_265");
      attr(svg, "width", "10");
      attr(svg, "height", "10");
      attr(svg, "viewBox", "0 0 10 10");
      attr(svg, "fill", "none");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, g);
      append(g, path);
      append(svg, defs);
      append(defs, clipPath);
      append(clipPath, rect);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
var Github = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment17, safe_not_equal, {});
  }
};
var github_svelte_default = Github;

// dist/dist/components/footer/assets/moon.svelte.js
function create_fragment18(ctx) {
  let svg;
  let path;
  return {
    c() {
      svg = svg_element("svg");
      path = svg_element("path");
      attr(path, "d", "M8.74996 5.32917C8.68441 6.03842 8.41823 6.71434 7.98256 7.27783C7.54689 7.84132 6.95975 8.26908 6.28984 8.51106C5.61992 8.75303 4.89495 8.79922 4.19975 8.6442C3.50455 8.48919 2.86787 8.13939 2.36422 7.63574C1.86057 7.13209 1.51077 6.49541 1.35575 5.80021C1.20074 5.10501 1.24692 4.38004 1.4889 3.71012C1.73088 3.04021 2.15864 2.45307 2.72213 2.0174C3.28562 1.58172 3.96154 1.31554 4.67079 1.25C4.25555 1.81178 4.05573 2.50394 4.10768 3.20059C4.15963 3.89724 4.4599 4.55211 4.95388 5.04608C5.44785 5.54006 6.10272 5.84033 6.79937 5.89228C7.49602 5.94423 8.18818 5.74441 8.74996 5.32917Z");
      attr(path, "stroke", "#C5C2CB");
      attr(path, "stroke-linecap", "round");
      attr(path, "stroke-linejoin", "round");
      attr(svg, "width", "10");
      attr(svg, "height", "10");
      attr(svg, "viewBox", "0 0 10 10");
      attr(svg, "fill", "none");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, path);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
var Moon = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment18, safe_not_equal, {});
  }
};
var moon_svelte_default = Moon;

// dist/dist/components/footer/index.svelte.js
function create_default_slot_2(ctx) {
  let flag;
  let current;
  flag = new flag_svelte_default({});
  return {
    c() {
      create_component(flag.$$.fragment);
    },
    m(target, anchor) {
      mount_component(flag, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(flag.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(flag.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(flag, detaching);
    }
  };
}
function create_default_slot_1(ctx) {
  let github;
  let current;
  github = new github_svelte_default({});
  return {
    c() {
      create_component(github.$$.fragment);
    },
    m(target, anchor) {
      mount_component(github, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(github.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(github.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(github, detaching);
    }
  };
}
function create_default_slot(ctx) {
  let moon;
  let current;
  moon = new moon_svelte_default({});
  return {
    c() {
      create_component(moon.$$.fragment);
    },
    m(target, anchor) {
      mount_component(moon, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(moon.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(moon.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(moon, detaching);
    }
  };
}
function create_fragment19(ctx) {
  let footer;
  let button0;
  let t0;
  let a;
  let button1;
  let t1;
  let button2;
  let current;
  button0 = new index_svelte_default({
    props: {
      classname: "svg-button",
      variant: "outlined",
      $$slots: {default: [create_default_slot_2]},
      $$scope: {ctx}
    }
  });
  button1 = new index_svelte_default({
    props: {
      classname: "svg-button",
      variant: "outlined",
      $$slots: {default: [create_default_slot_1]},
      $$scope: {ctx}
    }
  });
  button2 = new index_svelte_default({
    props: {
      classname: "svg-button",
      variant: "outlined",
      $$slots: {default: [create_default_slot]},
      $$scope: {ctx}
    }
  });
  button2.$on("click", handleThemeChange);
  return {
    c() {
      footer = element("footer");
      create_component(button0.$$.fragment);
      t0 = space();
      a = element("a");
      create_component(button1.$$.fragment);
      t1 = space();
      create_component(button2.$$.fragment);
      attr(a, "target", "_blank");
      attr(a, "href", "https://github.com/vitorGouveia/PasswordGenerator");
      attr(footer, "class", "svelte-zt2tq8");
    },
    m(target, anchor) {
      insert(target, footer, anchor);
      mount_component(button0, footer, null);
      append(footer, t0);
      append(footer, a);
      mount_component(button1, a, null);
      append(footer, t1);
      mount_component(button2, footer, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      const button0_changes = {};
      if (dirty & 1) {
        button0_changes.$$scope = {dirty, ctx: ctx2};
      }
      button0.$set(button0_changes);
      const button1_changes = {};
      if (dirty & 1) {
        button1_changes.$$scope = {dirty, ctx: ctx2};
      }
      button1.$set(button1_changes);
      const button2_changes = {};
      if (dirty & 1) {
        button2_changes.$$scope = {dirty, ctx: ctx2};
      }
      button2.$set(button2_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(button2.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(button2.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(footer);
      destroy_component(button0);
      destroy_component(button1);
      destroy_component(button2);
    }
  };
}
function handleThemeChange() {
}
var Footer = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment19, safe_not_equal, {});
  }
};
var index_svelte_default2 = Footer;

// dist/dist/router.svelte.js
function instance11($$self) {
  const routes = {
    "/": wrap({
      asyncComponent: () => Promise.resolve().then(() => require_home_svelte())
    }),
    "/login": wrap({
      asyncComponent: () => Promise.resolve().then(() => require_login_svelte())
    }),
    "/register": wrap({
      asyncComponent: () => Promise.resolve().then(() => require_register_svelte())
    }),
    "/style-guide": style_guide_svelte_default,
    "*": not_found_svelte_default
  };
  return [routes];
}
var Router_1 = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance11, create_fragment20, safe_not_equal, {});
  }
};
var router_svelte_default = Router_1;

// dist/dist/app.svelte.js
function create_fragment21(ctx) {
  let router;
  let current;
  router = new router_svelte_default({});
  return {
    c() {
      create_component(router.$$.fragment);
    },
    m(target, anchor) {
      mount_component(router, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(router.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(router.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(router, detaching);
    }
  };
}
function instance12($$self) {
  const loggedUserID = localStorage.getItem("@password-generator:logged-user-id");
  if (loggedUserID) {
    const users = JSON.parse(localStorage.getItem("@password-generator:users") || "[]");
    UserStore.set(users.find((user) => user.id === loggedUserID) || null);
  }
  return [];
}
var App = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance12, create_fragment21, safe_not_equal, {});
  }
};
var app_svelte_default = App;

// dist/dist/index.js
import.meta.env = env_exports;
var app = new app_svelte_default({
  target: document.body
});
var dist_default = app;
if (void 0) {
  (void 0).accept();
  (void 0).dispose(() => {
    app.$destroy();
  });
}
export {
  dist_default as default
};
//# sourceMappingURL=index.js.map
