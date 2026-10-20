[English](TROUBLESHOOTING.md) | **العربية**

<div dir="rtl">

# استكشاف الأخطاء وإصلاحها

| العَرَض | السبب | الحل |
|---|---|---|
| `ABORT: package integrity check failed: modified …` | تغيّر ملف داخل `dga-skills/` بعد آخر ختم | إن كنت غيّرته عمدًا: `python3 build.py`؛ وإلا فأعد التنزيل — فالمثبّت يحميك |
| `ABORT: installed version … is newer than package` | محاولة الرجوع إلى إصدار أقدم | استخدم `--force` فقط إن كنت تريد الإصدار الأقدم فعلًا |
| `conflict` / رمز الخروج 4 من إعدادات المشروع | يوجد الملف القديم `.claude/ahmed-skills.json` والملف `.claude/dga-skills.json` معًا بقيم مختلفة | أبقِ على الملف الذي تريده، واحذف الآخر، ثم شغّل الأمر مجددًا — لا يُدمج أي شيء تلقائيًا |
| لا يستخدم Claude المهارة | المهارة غير مثبّتة في ملف التعريف هذا، أو ما زالت مهارة `ahmed-skills` القديمة مفعّلة | `python3 install.py self-check`؛ يُظهر التحذير `LEGACY_SKILL_PRESENT` — أعد تشغيل `install.py install` |
| لم يُحفظ تغيير النمط ("switch to Creative") | عدّلت الجلسة الملف `.claude/dga-skills.json` مباشرة، فمنعه Claude Code لأنه ملف محمي | قل "use dga-skills and change the design mode to Creative"، أو شغّل `python3 ~/.claude/skills/dga-skills/tools/project_settings.py set --project . --mode dga-creative` |
| `optional ui-ux-pro-max: NOT INSTALLED` رغم أنك ثبّتها | ملف تعريف مختلف، أو أن الإضافة موقوفة | `python3 install.py deps status --claude-dir <profile>`؛ `claude plugin list` |
| `REFUSED (SOURCE …)` أثناء إعداد الاعتماديات | لم يتطابق اسم المتجر أو مُدخل الإضافة أو نص الترخيص | لا تتجاوز ذلك؛ وتحقّق من المستودع المصدر — فهذه هي الحماية من العبث |
| `The claude CLI is not on PATH` (رمز الخروج 7) | التشغيل خارج Claude Code (مثل بيئة Cowork المعزولة) | استخدم الخطوات داخل التطبيق: `python3 install.py deps cowork` |
| المهارات الجديدة لا تظهر بعد الإعداد | بدأت الجلسة قبل التثبيت | ابدأ جلسة Claude Code جديدة أو شغّل `/reload-plugins` |
| رُفض الرفع إلى Cowork | تنظيم ملف ZIP أو طول الوصف | أعد البناء باستخدام `python3 build_cowork.py`؛ وأبلغ عن نص الخطأ كما هو (طول الوصف 607 أحرف) |
| يُبلغ `check_dga_props.py` عن UNKNOWN PROP | تستخدم الشيفرة خاصية (prop) غير موجودة في الحزمة المثبّتة | استخدم الخاصية من `registry/packages/platformscode-core@<version>.json`؛ ولا تخترع خاصية أبدًا |
| تقرير QA: R1 FAIL عند 390 px LTR (`dga-footer`) | عيب لدى المورّد PKG-FOOTER-02 | معروف ومنسوب إلى مصدره؛ ولا يمكن إصلاحه دون تعديل الحزمة |

</div>
