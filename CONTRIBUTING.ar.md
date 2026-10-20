[English](CONTRIBUTING.md) | **العربية**

<div dir="rtl">

# المساهمة

يتولى أحمد درويش صيانة DGA Skills Toolkit. نرحّب بالبلاغات (Issues) وطلبات الدمج (Pull Requests). بمساهمتك، فإنك توافق على نشر مساهمتك بموجب [رخصة MIT](LICENSE) الخاصة بالمشروع.

في التغييرات الكبيرة، افتح بلاغًا (Issue) أولًا حتى يُتفق على المنهجية قبل أن تبذل وقتك فيها.

## القواعد الأساسية
1. **لا تعدّل `node_modules` أبدًا** ولا حزم الموردين. سجّل مشكلات حزم الموردين في `dga-skills/registry/packages.json` مع حل بديل.
2. **لا خصائص (props) ولا حالات مخترعة.** شغّل `python3 dga-skills/tools/check_dga_props.py --project <app>` وتوقع النتيجة `OK — no invented props`.
3. **لا ادعاءات غير موثّقة.** عبارات مثل "DGA compliant" و"100 %" و"official" تتطلب أدلة ضمان الجودة التي يشترطها النمط. البوابة التقديرية (الذاتية) تكون REVIEW REQUIRED، ولا تكون PASS أبدًا.
4. **لا أصول مقيّدة.** لا تضف (commit) ملفات SVG المصدّرة من Figma، ولا ملفات SVG من `@platformscode/icons`، ولا Hugeicons Pro.
5. **أعد الختم بعد تعديل المهارة.** بعد أي تغيير داخل `dga-skills/`، شغّل `python3 build.py`. أداة التثبيت ترفض أي حزمة غير مختومة.

## قبل طلب الدمج
```bash
python3 build.py                                            # seal checksums + manifest
python3 dga-skills/tools/registry_integrity.py
python3 dga-skills/tools/validate_skill_package.py dga-skills
python3 dga-skills/tools/code_quality_check.py --path .     # 0 findings
python3 install.py install --claude-dir /tmp/dga-profile --no-deps && python3 install.py verify --claude-dir /tmp/dga-profile
```

## الإيداعات (Commits)
اجعل كل إيداع لتغيير منطقي واحد، برسالة توضّح *السبب*. عند تغيير أي سياسة، حدّث `dga-skills/rules/policies.md`.

</div>
