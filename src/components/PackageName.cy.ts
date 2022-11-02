import PackageName from "./PackageName.vue";

describe("<PackageName>", () => {
  beforeEach(() => {
    Cypress.Cookies.debug(true);

    cy.setCookie(
      "toy-access-token",
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjE1Nzk2OTM0MjUifQ.eyJjbXBDb2RlIjoiTlgiLCJ2aWQiOiJjMDc0YmIwYy0xY2YyLTQ3YzEtYmFiNy05ZWZlODBlYjQwNWYiLCJlbXBJZCI6Im1pbmppa2ltNzk4MyIsInVzZXJfbmFtZSI6Im1pbmppa2ltNzk4MyIsInNjb3BlIjpbImJhY2tvZmZpY2U6Y29uc29sZSJdLCJlbXBFbWFpbCI6Im1pbmppa2ltNzk4M0BuZXhvbi5jby5rciIsImVtcE5vIjoiMjg5NjMiLCJleHAiOjE2NjY2MTA2NTYsImp0aSI6ImMzNjc2MzAwLWMxZTMtNGFmMS1hZDA5LWQyYjM5MDE2ZGU4YyIsImNsaWVudF9pZCI6Ijg2YzJiYzZhLWY2NmQtNGNjMy1iYWRiLWI1MzFhODJhMGRiOSJ9.lSRn8_UZ7WwZCqZNR2alXfvql4_MO2gzRA1hHm_P9DbOYuTTYapMgsEkqK4aAS7tTgT3ONGYHRN8CqQonuLV3o2i0blJaXqqT0deu9k9zNS5iDzYmCEh6t3PHQwPPFZJrA4QD05F0csUoY7Cf9-80lLkON13VTPVUKVne_dLkTa87A7zaNTc1ku9AiYGQkDBJ3d3w654f3YJzBcq9v0wO1MNMG-l_UyoqVjaEpf8IgBKJW9tVhC9G2VyQAT438r7SQb56WiXemTl5xme-SLl37Iht4GcOv5Jqhb-_oWJVKWEnYMn_YTfVZJaFMaoH1rJ4wDVamyMFh_Ql9_fEDsdTQ"
    );
  });

  it("mounts", () => {
    cy.mount(PackageName);
  });

  const packageNameSelector = "[data-cy=packageName_input]";

  it("stepper should default to null", () => {
    cy.mount(PackageName);
    cy.get(packageNameSelector).should("have.text", "");
  });

  it("packageName should value", () => {
    cy.mount(PackageName);
    cy.get(packageNameSelector)
      .type("게임패키지")
      .should("have.value", "게임패키지");
  });

  it("apiTest", () => {
    cy.request({
      method: "GET",
      url: "http://local-eve-management.nexon.com/g-alpha-eve-apis/game/67/image",
      headers: {
        "Content-Type": "application/json",
        "X-Toy-Env": "dev",
        "X-Toy-ProjectId": "8f8aa2b8",
        "X-Toy-ServiceId": 2015,
        "x-user": "NX_26525",
        accept: "application/json",
        Cookie:
          "_fbp=fb.1.1656475095854.1782669327; PCID=16569186344487669989850; _ga_LM85L4VGS5=GS1.1.1658387230.1.0.1658387235.0; toy-locale=ko; NXGID=FA8D50E222137EDC5C3338756440BECB; M_JL=1; _GWC3=PCID=C5FCCAF5A759739BF23C6F044A57F6B4; _ga_H4SKXXBNM3=GS1.1.1665030380.2.1.1665031582.0.0.0; _ga=GA1.2.2072726090.1656918634; eve_draft_mode=false; A2SK=act:16654723474223003349; _gcl_au=1.1.811456157.1665472348; NXTPA=-; NXSIGNUP=-1; _ifplatform_selector=krpc; eve_debug_mode=true; toy-access-token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjE1Nzk2OTM0MjUifQ.eyJjbXBDb2RlIjoiTlgiLCJ2aWQiOiJjMDc0YmIwYy0xY2YyLTQ3YzEtYmFiNy05ZWZlODBlYjQwNWYiLCJlbXBJZCI6Im1pbmppa2ltNzk4MyIsInVzZXJfbmFtZSI6Im1pbmppa2ltNzk4MyIsInNjb3BlIjpbImJhY2tvZmZpY2U6Y29uc29sZSJdLCJlbXBFbWFpbCI6Im1pbmppa2ltNzk4M0BuZXhvbi5jby5rciIsImVtcE5vIjoiMjg5NjMiLCJleHAiOjE2NjY2MTA2NTYsImp0aSI6ImMzNjc2MzAwLWMxZTMtNGFmMS1hZDA5LWQyYjM5MDE2ZGU4YyIsImNsaWVudF9pZCI6Ijg2YzJiYzZhLWY2NmQtNGNjMy1iYWRiLWI1MzFhODJhMGRiOSJ9.lSRn8_UZ7WwZCqZNR2alXfvql4_MO2gzRA1hHm_P9DbOYuTTYapMgsEkqK4aAS7tTgT3ONGYHRN8CqQonuLV3o2i0blJaXqqT0deu9k9zNS5iDzYmCEh6t3PHQwPPFZJrA4QD05F0csUoY7Cf9-80lLkON13VTPVUKVne_dLkTa87A7zaNTc1ku9AiYGQkDBJ3d3w654f3YJzBcq9v0wO1MNMG-l_UyoqVjaEpf8IgBKJW9tVhC9G2VyQAT438r7SQb56WiXemTl5xme-SLl37Iht4GcOv5Jqhb-_oWJVKWEnYMn_YTfVZJaFMaoH1rJ4wDVamyMFh_Ql9_fEDsdTQ; _gid=GA1.2.561970173.1666574979; isCafe=true; NXCH=OID=1343079354&BOID=1343079354&ID=1343079354@nx&NICKNAME=GG115867809434E9; IM=1; ENC=uBf8jraj6Evpn2PQ6qCGHh4vw5coDYGL9atrIVJ2gG1TEQHKVf1PkNOtZmMHpph9BR9Vo9tAahryDIElS3H9sY9oe7q2y5Ln9uOx~5FCpnhsZVjRjPGvMAzrmaBkcx3x_f9myv6Q1_JSOiQGHbsN7KoD1QBlBr0HMNzLt58rrt6pcrJSJf8kpsyu6FAwD_j629uTGTgc~~EKYItcOl~gF_kZJBDjt8msC94yroSZ08MUuNe8QW2mhR2t5Aku8yLokbW7erI3JfBfrRY~0V1lwRLLfJpCVO6lyNvnCVCjs7KiE_Dwx9X47Bv48AlaeogRKe_Eel73Rp6HlqAIVeki43ZC6jSka3gKSS6u5VA3DYDgxP0NXltYNoOOnaURbzDv4yFyic0pDCnfaaO1uUl3Frin87v2W69zUZbpIOM8NIqcNrTnJZTBdilmKgizXbzml4ii3~ytuAbcWAtKoN3f4Oqk~s~MC9iqmnNO_9yth_DWqW; IL=1; NXWV=0; _ifwt=ias:wt:1666574991043:907924563@d9d57427-8e46-48a6-91a4-53d82041755b:KPF; NXLW=SID=35CE8B1D8588D69B01C8E7FC3F16E27C&PTC=https:&DOM=baramy.nexon.com&ID=1343079354&CP=; NPP=NP11:auth:1343079354:AxwbQxWry6skkMfCmpU7Vqs6anVdk2_9vOETLo76VWOzTBP8xzyKGRDQwmivBaDu8Xa~QKZWIgMPB5lgPpj03u5ciD2vGJmYslOY6ZXfcbfV6Yx14ancHZE1S6xCIhmBgOJ~Wfkh7aw_DLcE7WN4LIzJvGg2NPutVMohgYQWQzaRQKyj31M4pA01Xyob1Q7GwrbEzHMci7uIvyyJOGGTVUKpbimBDtyeIraPQK0H8xJc7eQK~Zy; toy-project-id=8f8aa2b8; projectId=8f8aa2b8; toy-menu-id=11ea6e77-62ea-585c-a477-abe4fb71fdbf; toy-environment=dev; toy-service-id=2015; svcId=2015; svc_id=2015",
      },
      followRedirect: false,
    });
  });
});
