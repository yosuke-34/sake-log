/**
 * 画像ファイルからEXIF撮影日を取得する
 * @returns YYYY-MM-DD形式の日付文字列、取得できない場合はnull
 */
export async function getExifDate(file: File): Promise<string | null> {
  try {
    const ExifReader = (await import('exifreader')).default;
    const arrayBuffer = await file.arrayBuffer();
    const tags = ExifReader.load(arrayBuffer, { expanded: true });

    // DateTimeOriginal（撮影日時）を優先
    const dateTag =
      tags.exif?.DateTimeOriginal?.description ||
      tags.exif?.DateTime?.description ||
      tags.exif?.DateTimeDigitized?.description;

    if (dateTag) {
      // EXIF形式 "YYYY:MM:DD HH:MM:SS" → "YYYY-MM-DD"
      const match = dateTag.match(/^(\d{4})[:\-/](\d{2})[:\-/](\d{2})/);
      if (match) {
        return `${match[1]}-${match[2]}-${match[3]}`;
      }
    }

    return null;
  } catch (e) {
    console.error('EXIF読み取りエラー:', e);
    return null;
  }
}
