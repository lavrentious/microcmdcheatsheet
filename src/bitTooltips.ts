export type Tooltip = {
  bit: number;
  mnemonic: string;
  comment?: string;
};

// operational micro commands (bit 39 = 0)
export const omcTooltips: Tooltip[] = [
  { bit: 0, mnemonic: "RDDR", comment: "DR(PД) -> правый вход АЛУ" },
  { bit: 1, mnemonic: "RDCR", comment: "CR(PK) -> правый вход АЛУ" },
  { bit: 2, mnemonic: "RDIP", comment: "IP(CK) -> правый вход АЛУ" },
  { bit: 3, mnemonic: "RDSP", comment: "SP(YC) -> правый вход АЛУ" },
  { bit: 4, mnemonic: "RDAC", comment: "АС(А) -> левый вход АЛУ" },
  { bit: 5, mnemonic: "RDBR", comment: "ВR(БР) -> левый вход АЛУ" },
  { bit: 6, mnemonic: "RDPS", comment: "PS(PC) -> левый вход АЛУ" },
  { bit: 7, mnemonic: "RDIR", comment: "KR(KP) -> левый вход АЛУ" },
  { bit: 8, mnemonic: "COMR", comment: "Обратный код правого входа АЛУ" },
  { bit: 9, mnemonic: "COML", comment: "Обратный код левого входа АЛУ" },
  { bit: 10, mnemonic: "PLS1", comment: "Операция A + B + 1 (PLuS 1)" },
  {
    bit: 11,
    mnemonic: "SORA",
    comment: "Операция и (Sum OR And) (да, мы наркоманы)",
  },

  { bit: 12, mnemonic: "LTOL", comment: "Прямая передача младшего байта" },
  { bit: 13, mnemonic: "LTOH", comment: "Передача младшего байта в старший" },
  { bit: 14, mnemonic: "HTOL", comment: "Передача старшего байта в младший" },
  { bit: 15, mnemonic: "HTOH", comment: "Прямая передача старшего байта" },
  {
    bit: 16,
    mnemonic: "SEXT",
    comment: "Расширение знака младшего байта (sign extend)",
  },
  {
    bit: 17,
    mnemonic: "SHLT",
    comment: "Сдвиг влево (арифметический) (SHift LefT)",
  },
  {
    bit: 18,
    mnemonic: "SHL0",
    comment:
      "Передача старого значения C в младший бит (для циклического сдвига влево)",
  },
  {
    bit: 19,
    mnemonic: "SHRT",
    comment: "Сдвиг вправо (арифметический) (SHift RighT)",
  },
  {
    bit: 20,
    mnemonic: "SHRF",
    comment: "Переключатель сдвига вправо (для иклического сдвига 15 разряд )",
  },
  { bit: 21, mnemonic: "SETC", comment: "Установка C" },
  { bit: 22, mnemonic: "SETV", comment: "Установка V" },
  { bit: 23, mnemonic: "STNZ", comment: "Установка N и Z" },
  { bit: 24, mnemonic: "WRDR", comment: "АЛУ -> DR" },
  { bit: 25, mnemonic: "WRCR", comment: "АЛУ -> CR" },
  { bit: 26, mnemonic: "WRIP", comment: "АЛУ -> IP" },
  { bit: 27, mnemonic: "WRSP", comment: "АЛУ -> SP" },
  { bit: 28, mnemonic: "WRAC", comment: "АЛУ -> AC" },
  { bit: 29, mnemonic: "WRBR", comment: "АЛУ -> BR" },
  { bit: 30, mnemonic: "WRPS", comment: "АЛУ -> PS" },
  { bit: 31, mnemonic: "WRAR", comment: "АЛУ -> AR" },
  { bit: 32, mnemonic: "LOAD", comment: "Ячейка памяти -> DR" },
  { bit: 33, mnemonic: "STOR", comment: "DR -> Ячейка памяти" },
  { bit: 34, mnemonic: "IO", comment: "Передача адреса и приказа на ВУ" },
  { bit: 35, mnemonic: "INTS", comment: "Предоставление прерывания" },
  { bit: 36, mnemonic: "-", comment: "Зарезервирован" },
  { bit: 37, mnemonic: "-", comment: "Зарезервирован" },
  { bit: 38, mnemonic: "HALT", comment: "Останов" },
  { bit: 39, mnemonic: "ТУРЕ", comment: "Бит выбора ОМК/УМК" },
];

// control micro commands (bit 39 = 1)
export const cmcTooltips: Tooltip[] = omcTooltips
  .slice(0, 16)
  .concat([
    {
      bit: 16,
      mnemonic: "BIT",
      comment: "Поле выбора проверяемого бита из коммутатора (8 бит)",
    },
    {
      bit: 17,
      mnemonic: "BIT",
      comment: "Поле выбора проверяемого бита из коммутатора (8 бит)",
    },
    {
      bit: 18,
      mnemonic: "BIT",
      comment: "Поле выбора проверяемого бита из коммутатора (8 бит)",
    },
    {
      bit: 19,
      mnemonic: "BIT",
      comment: "Поле выбора проверяемого бита из коммутатора (8 бит)",
    },
    {
      bit: 20,
      mnemonic: "BIT",
      comment: "Поле выбора проверяемого бита из коммутатора (8 бит)",
    },
    {
      bit: 21,
      mnemonic: "BIT",
      comment: "Поле выбора проверяемого бита из коммутатора (8 бит)",
    },
    {
      bit: 22,
      mnemonic: "BIT",
      comment: "Поле выбора проверяемого бита из коммутатора (8 бит)",
    },
    {
      bit: 23,
      mnemonic: "BIT",
      comment: "Поле выбора проверяемого бита из коммутатора (8 бит)",
    },
    { bit: 24, mnemonic: "ADDR", comment: "Адрес перехода (8 бит)" },
    { bit: 25, mnemonic: "ADDR", comment: "Адрес перехода (8 бит)" },
    { bit: 26, mnemonic: "ADDR", comment: "Адрес перехода (8 бит)" },
    { bit: 27, mnemonic: "ADDR", comment: "Адрес перехода (8 бит)" },
    { bit: 28, mnemonic: "ADDR", comment: "Адрес перехода (8 бит)" },
    { bit: 29, mnemonic: "ADDR", comment: "Адрес перехода (8 бит)" },
    { bit: 30, mnemonic: "ADDR", comment: "Адрес перехода (8 бит)" },
    { bit: 31, mnemonic: "ADDR", comment: "Адрес перехода (8 бит)" },
    { bit: 32, mnemonic: "COMP", comment: "Однобитовое поле сравнения" },
    { bit: 33, mnemonic: "-", comment: "Резерв" },
    { bit: 34, mnemonic: "-", comment: "Резерв" },
    { bit: 35, mnemonic: "-", comment: "Резерв" },
    { bit: 36, mnemonic: "-", comment: "Резерв" },
    { bit: 37, mnemonic: "-", comment: "Резерв" },
    { bit: 38, mnemonic: "-", comment: "Резерв" },
  ])
  .concat(omcTooltips.slice(omcTooltips.length - 1, omcTooltips.length));
